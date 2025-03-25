import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { LoadingService } from 'src/app/services/loading.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  @Input() listTitle: string = '';
  @Output() listaAtualizada = new EventEmitter<void>();
  isModalOpen = false;
  nomeToDoEditar = '';
  descricaoToDoEditar = '';

  constructor(
    private todoService: TodoService,
    private loadingService: LoadingService,
    private notificationService: NotificationService
    
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    if (this.listTitle === 'A fazer') {

      this.loadingService.show();

      this.todoService.getTodosAFazer().subscribe(
        (data) => {
          this.tasks = data;

          this.loadingService.hide();
        },
        (error) => {
          console.error('Erro ao buscar tarefas a fazer', error);

          this.loadingService.hide();
        }
      );
    } else if (this.listTitle === 'Feitas') {
      this.todoService.getTodosFeitas().subscribe(
        (data) => {
          this.tasks = data;

          this.loadingService.hide();
        },
        (error) => {
          console.error('Erro ao buscar tarefas feitas', error);

          this.loadingService.hide();
        }
      );
    }
  }

  atualizarLista() {
    this.getTasks();
    this.listaAtualizada.emit();
  }

  openModalEditar(todo: any) {
    this.isModalOpen = true;
    this.nomeToDoEditar = todo.nome;
    this.descricaoToDoEditar = todo.descricao; 
  }

  closeModalEditar() {
    this.isModalOpen = false;
  }

  salvarEdicao() {
    const [todo] = this.tasks; //entre [] para destruturar o array e pegar o primeiro elemento

    const dto = { ...todo, nome: this.nomeToDoEditar, descricao: this.descricaoToDoEditar };

    this.loadingService.show();

   this.todoService.editarTodo(dto).subscribe(
      (response) => {
        debugger
        todo.nome = response.todo.nome;
        todo.descricao = response.todo.descricao;
        this.notificationService.showSuccess(response.message);
        this.loadingService.hide();
      },
      (error) => {
        this.notificationService.showError(error.error.message);
        this.loadingService.hide();
      }
    );
    
    this.closeModalEditar();
  }
}
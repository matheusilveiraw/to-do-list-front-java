import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { LoadingService } from 'src/app/services/loading.service';


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
    private loadingService: LoadingService
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
      (data) => {
        todo.nome = data.nome;
        todo.descricao = data.descricao;
        this.loadingService.hide();
      },
      (error) => {
        console.error('Erro ao editar tarefas a fazer', error);
        this.loadingService.hide();
      }
    );
    
    this.closeModalEditar();
  }
}
import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() task: any;

  constructor(
    private todoService: TodoService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    
  }

  finalizarTarefa(): void {
    this.loadingService.show();

    this.todoService.finalizarTodo(this.task).subscribe(
      (response) => {
        console.log('Tarefa adicionada com sucesso!', response);
        this.loadingService.hide();
      },
      (error) => {
        console.error('Erro ao adicionar tarefa', error);
        this.loadingService.hide();
      }
    );
  }
}

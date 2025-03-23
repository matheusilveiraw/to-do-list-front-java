import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() task: any;
  @Output() tarefaFinalizada = new EventEmitter<void>();
  @Output() editarTarefaEvent = new EventEmitter<any>(); 

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
        this.tarefaFinalizada.emit();
        this.loadingService.hide();
      },
      (error) => {
        this.loadingService.hide();
      }
    );
  }

  openModalEditar() {
    this.editarTarefaEvent.emit(this.task); 
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';  
import { LoadingService } from 'src/app/services/loading.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isModalOpen = false;
  novaToDoTitle = '';
  novaToDoDescription = '';
  @Output() todoAdded = new EventEmitter<void>();


  constructor(private todoService: TodoService,
    private loadingService: LoadingService,
    private notificationService: NotificationService
  ) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.novaToDoTitle = '';
    this.novaToDoDescription = '';
  }

  addToDo(): void {
    const novaToDo = {
      nome: this.novaToDoTitle,
      descricao: this.novaToDoDescription
    };

    this.loadingService.show();

    this.todoService.addTodo(novaToDo).subscribe(
      (response) => {
        this.notificationService.showSuccess('Tarefa adicionada com sucesso!');
        this.closeModal();
        this.todoAdded.emit(); 
        this.loadingService.hide();
      },
      (error) => {
        this.notificationService.showError('Erro ao adicionar tarefa.');
        this.loadingService.hide();
      }
    );
  }
}

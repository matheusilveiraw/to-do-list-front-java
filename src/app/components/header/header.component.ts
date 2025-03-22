import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';  
import { LoadingService } from 'src/app/services/loading.service';

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
    private loadingService: LoadingService
  ) {} //

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.novaToDoTitle = '';
    this.novaToDoDescription = '';
  }

  addToDo(): void {
    console.log('Nova Tarefa:', this.novaToDoTitle, this.novaToDoDescription);

    const novaToDo = {
      nome: this.novaToDoTitle,
      descricao: this.novaToDoDescription
    };

    this.loadingService.show();

    this.todoService.addTodo(novaToDo).subscribe(
      (response) => {
        console.log('Tarefa adicionada com sucesso!', response);
        this.closeModal();
        this.todoAdded.emit(); 
        this.loadingService.hide();
      },
      (error) => {
        console.error('Erro ao adicionar tarefa', error);
        this.loadingService.hide();
      }
    );
  }
}

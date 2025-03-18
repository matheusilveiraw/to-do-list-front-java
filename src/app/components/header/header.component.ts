import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';  

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isModalOpen = false;
  novaToDoTitle = '';
  novaToDoDescription = '';

  constructor(private todoService: TodoService) {} //

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

    this.todoService.addTodo(novaToDo).subscribe(
      (response) => {
        console.log('Tarefa adicionada com sucesso!', response);
        this.closeModal();
      },
      (error) => {
        console.error('Erro ao adicionar tarefa', error);
      }
    );
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isModalOpen = false;
  newTaskTitle = '';
  newTaskDescription = '';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.newTaskTitle = '';
    this.newTaskDescription = '';
  }

  addTask() {
    console.log('Nova Tarefa:', this.newTaskTitle, this.newTaskDescription);
    this.closeModal();
  }
}

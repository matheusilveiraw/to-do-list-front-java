import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() listTitle: string = ''; 
  tasks = [
    { id: 1, title: 'Estudar Angular', completed: false },
    { id: 2, title: 'Fazer compras', completed: false }
  ];
}
import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  @Input() listTitle: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.todoService.getTodos().subscribe(
      (data) => {
        console.log(data);
        this.tasks = data;
      },
      (error) => {
        console.error('Erro ao buscar tarefas', error);
      }
    );
  }
}

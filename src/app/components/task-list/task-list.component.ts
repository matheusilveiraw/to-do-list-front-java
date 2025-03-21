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
    if (this.listTitle === 'A fazer') {
      this.todoService.getTodosAFazer().subscribe(
        (data) => {
          console.log('A fazer:', data);
          this.tasks = data;
        },
        (error) => {
          console.error('Erro ao buscar tarefas a fazer', error);
        }
      );
    } else if (this.listTitle === 'Feitas') {
      this.todoService.getTodosFeitas().subscribe(
        (data) => {
          console.log('Feitas:', data);
          this.tasks = data;
        },
        (error) => {
          console.error('Erro ao buscar tarefas feitas', error);
        }
      );
    }
  }
}
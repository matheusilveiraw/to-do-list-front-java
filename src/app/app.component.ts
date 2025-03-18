import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe(
    //   (data) => {
    //     console.log('Dados recebidos:', data);
    //     this.todos = data; 
    //   },
    //   (error) => console.error('Erro ao buscar os dados:', error)
    // );
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from './services/todo.service';
import { TaskListComponent } from 'src/app/components/task-list/task-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: any[] = [];
  @ViewChild('listaAFazer') listaAFazer!: TaskListComponent;
  @ViewChild('listaFeitas') listaFeitas!: TaskListComponent;

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

  atualizarListas() {
    if (this.listaAFazer) {
      this.listaAFazer.getTasks();
    }
    if (this.listaFeitas) {
      this.listaFeitas.getTasks();
    }
  }
}

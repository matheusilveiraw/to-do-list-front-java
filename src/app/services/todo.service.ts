import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:9090/api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

    getTodosAFazer(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/fazer`);
    }
  
    getTodosFeitas(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/feitos`);
    }

    addTodo(novaToDo: { 
      nome: string, 
      descricao: string
     }): Observable<any> {
      return this.http.post<any>(this.apiUrl, novaToDo);
    }

    finalizarTodo(todo: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/${todo.id}/finalizar`, todo);
    }

    editarTodo(todo: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/${todo.id}`, todo);
    }

    deletarTodo(todo: any): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/${todo.id}`, todo);
    }
}
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
}
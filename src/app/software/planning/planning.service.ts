import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoStatus } from '../models/todoStatus';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  constructor(

    private http : HttpClient

  ) { }
   
  updateTodoStatus(id: number, updateStatusData: any): Observable<TodoStatus>
  {
    return this.http.patch<TodoStatus>("https://localhost:6001/todo/updapte/todostatus/" + id, updateStatusData);
  }
  
}

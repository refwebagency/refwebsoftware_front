import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoStatus } from '../models/todoStatus';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  constructor(

    private http : HttpClient,
    private route : Router

  ) { }

  updateTodoStatus(id: number, updateStatusData: any): Observable<TodoStatus>
  {
    return this.http.patch<TodoStatus>("https://localhost:6001/todo/updapte/todostatus/" + id, updateStatusData);
  }
  
}

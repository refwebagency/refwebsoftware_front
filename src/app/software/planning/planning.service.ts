import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, repeat } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoStatus } from '../models/todoStatus';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  constructor(

    private http : HttpClient,
    private route: Router
  ) { }
   
  updateTodoStatus(id: number, updateStatusData: any): Observable<TodoStatus>
  {
    return this.http.patch<TodoStatus>("https://localhost:6001/todo/updapte/todostatus/" + id, updateStatusData);
  }

 /**
  * @returns l'observable dans lequel on va avoir la liste des Todos
  * en rapport avec l'id de l'user connecté
  */

  getTodosByUserId(): Observable<Todo[]>
  {
    var stringUrl = this.route.url;
     console.log(stringUrl)
     var id = stringUrl.match(/\d+/g);
    return this.http.get<Todo[]>("https://localhost:6001/todo/user/" + id![0]).pipe(
      delay(1000), repeat()
    )
  } 

  /**
   * @returns un observable de Todo
   */
   getTodo(): Observable<Todo>
   {
     var stringUrl = this.route.url;
     console.log(stringUrl)
     var id = stringUrl.match(/\d+/g);
     console.log(id);
     let todoById = "https://localhost:6001/todo/" + id![1];
     return this.http.get<Todo>(todoById);
   }

   /**
    * @returns un observable de User
    */
    getUser(): Observable<User>
    {
      var stringUrl = this.route.url;
      var id = stringUrl.match(/\d+/g);
      console.log(id);
      let userById = "https://localhost:2001/user/" + id![0];
      return this.http.get<User>(userById);
    }
  
}

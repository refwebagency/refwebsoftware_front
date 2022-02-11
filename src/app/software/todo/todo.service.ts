import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, delay, Observable, repeat } from 'rxjs';
import { Specialization } from '../models/specialization';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //Todos represente la liste des Todos
  todos: Todo[] = []
  todoChange: BehaviorSubject<Todo[]> = new BehaviorSubject(this.todos);
  
  /** 
  * @param Injection de la dependance HttpClient, en private  
  * pour eviter de devoir déclarer une proprieté et ainsi de faire une
  * initialisation du service http pour faire des requêtes http
  */  
  constructor(
    private route: Router,
    private http: HttpClient
  ) { }

  eventTodo(todo: any)
  {
    this.todoChange.next(todo);
  }

  /**
  * @returns l'observable dans lequel on va avoir la liste des Todos
  */
  getTodos(): Observable<Todo[]>
  {
    return this.http.get<Todo[]>("https://localhost:6001/todo");
  } 

  /**
   * @returns un observable de Todo
   */
    getTodo(): Observable<Todo>
    {
      var stringUrl = this.route.url;
      var id = stringUrl.match(/\d+/g);
      console.log(id);
      let todoById = "https://localhost:6001/todo/" + id;
      return this.http.get<Todo>(todoById)
    }

    /**
    * 
    * @param id 
    * @param updateFromData 
    * @returns pour mettre a jour un Todo
    */
    updateTodo(id: number, updateFromData: any): Observable<Todo>
    {
      return this.http.put<Todo>("https://localhost:6001/todo/update/" + id, updateFromData);
    }

    /**
    * 
    * @returns l'observable contenant la liste des specializations
    * pour pouvoir assigner une spec lors de la création d'un user
    */
    getSpecializations(): Observable<Specialization[]>
    { 
      return this.http.get<Specialization[]>("https://localhost:4001/specialization");
    }
}
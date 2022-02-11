import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  //represente ma liste de Todos
  todos: Todo[] = []
  todo: Todo = {} as Todo
  searchTerm!: string;

  //Initialisation d'une variable pour récuperer le typage du service
  constructor(private myService: TodoService) 
  { 
    this.myService.todoChange.subscribe(() => {
      this.myService.getTodos().subscribe(c => this.todos = c);
      console.log("getTodo() pour sidebar2 déclenché")
    })
  }

  ngOnInit(): void {
  }

}
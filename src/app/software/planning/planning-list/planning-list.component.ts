import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { User } from '../../models/user';
import { PlanningService } from '../planning.service';

@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.scss']
})
export class PlanningListComponent implements OnInit {

  //represente ma liste de Todos
  todos: Todo[] = []
  todo: Todo = {} as Todo
  users: User[] = []
  user: User = {} as User
  searchTerm!: string;

  //Initialisation d'une variable pour récuperer le typage du service
  constructor(
    private myService: PlanningService
  ) 
  { 
    this.myService.todoChange.subscribe(() => {
      this.myService.getTodosByUserId().subscribe(c => this.todos = c);
      console.log("getTodosByUserId() pour sidebar2 déclenché")
    })

    this.myService.userChange.subscribe(() => {
      this.myService.getUser().subscribe(c => this.user = c);
      console.log("getUser() pour sidebar2 déclenché")
    })
  }

  /**
   * à chaques nouveaux changement d'états, execute la requete getTodos
   */
  ngOnInit(): void {

    // this.myService.getTodosByUserId().subscribe(t => this.todos = t);
    // this.myService.getUser().subscribe(u => this.user = u)
  }

}

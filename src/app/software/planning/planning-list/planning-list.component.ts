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
  user: User = {} as User
  searchTerm!: string;

  //Initialisation d'une variable pour récuperer le typage du service
  constructor(
    private myService: PlanningService
  ) { }

  /**
   * à chaques nouveaux changement d'états, execute la requete getTodos
   */
  ngOnInit(): void {

    this.myService.getTodosByUserId().subscribe(t => this.todos = t);
    this.myService.getUser().subscribe(u => this.user = u)
  }

}

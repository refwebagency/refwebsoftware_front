import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../todo/todo.service';

@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.scss']
})
export class PlanningListComponent implements OnInit {

  //represente ma liste de Todos
  todos: Todo[] = []
  todo: Todo = {} as Todo
  searchTerm!: string;

  //Initialisation d'une variable pour récuperer le typage du service
  constructor(
    private myService: TodoService
  ) { }

  /**
   * à chaques nouveaux changement d'états, execute la requete getTodos
   */
  ngOnInit(): void {

    this.myService.getTodos().subscribe(u => this.todos = u);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, Router, Event, NavigationStart } from '@angular/router';
import { Todo } from '../../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  //represente ma liste de Todos
  todos: Todo[] = []
  //represente un objet Todo
  todo: Todo = {} as Todo

  constructor(
    private myService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) 
  {
    /**
     * écoute l'url lors du chargement de la page 
     * et lors de la fermeture de la page.
     * Ceci permet de fairte un ngOnit à chaque changement d'id dans l'url pour 
     * ainsi recharger le component en faisant la méthode getTodo
     * et donc afficher le Todo adequat
     */
      this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        var stringUrl = this.router.url;
        var id = stringUrl.match(/\d+/g);
        if(stringUrl === "/todo/" + id){
          this.ngOnInit();
        }
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    })
  }

  ngOnInit(): void {
    /**
     * souscrit à la méthode getTodo dans le service avec comme 
     * parametre l'id récuperé depuis l'url
     */
    this.myService.getTodo().subscribe((t => this.todo = t));   
  }

} 

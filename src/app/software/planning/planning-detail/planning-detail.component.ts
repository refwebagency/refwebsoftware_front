import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, Router, Event, ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo';
import { TodoService } from '../../todo/todo.service';
import { PlanningService } from '../planning.service';

@Component({
  selector: 'app-planning-detail',
  templateUrl: './planning-detail.component.html',
  styleUrls: ['./planning-detail.component.scss']
})
export class PlanningDetailComponent implements OnInit {

  //represente ma liste de Todos
  todos: Todo[] = []
  //represente un objet Todo
  todo: Todo = {} as Todo

  // msgTodo = 'en cour';
  // msgCurrent = 'en cour';
  // msgDone = 'fini';

  constructor(
    private myService: TodoService,
    private myPlanningService: PlanningService,
    private router: Router
  ) {
      /**
       * écoute l'url lors du chargement de la page 
       * et lors de la fermeture de la page.
       * Ceci permet de fairte un ngOnit à chaque changement d'id dans l'url pour 
       * ainsi recharger le component en faisant la méthode getTodo
       * et donc afficher le Todo adequat
       */
       this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.ngOnInit();
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
    this.myService.getTodo().subscribe((u => this.todo = u));
    
  }

  updateTodoStatusById(todoId: any, todoStatus: any)
  {
    const newForm = {
      id: todoId,
      status: todoStatus
    }
    console.log(todoStatus)
    this.myPlanningService.updateTodoStatus(todoId, newForm).subscribe();
  
  
  }

}

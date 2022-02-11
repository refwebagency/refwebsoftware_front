import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, Router, Event, ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo';
import { User } from '../../models/user';
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

  user: User = {} as User

  // msgTodo = 'en cour';
  // msgCurrent = 'en cour';
  // msgDone = 'fini';

  constructor(
    private myService: PlanningService,
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
          var stringUrl = this.router.url;
          var id = stringUrl.match(/\d+/g);
          if(id){
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
    this.myService.getTodo().subscribe((u => this.todo = u));
    this.myService.getUser().subscribe((u => this.user = u));
  }

  updateTodoStatusById(todoId: any, todoStatus: any)
  {
    const newForm = {
      id: todoId,
      status: todoStatus
    }
    console.log(todoStatus)
<<<<<<< HEAD
    this.myService.updateTodoStatus(todoId, newForm).subscribe();
    this.reloadCurrentRoute();
  
  }

  /**
   * permet de naviguer vers url ciblé en se basant sur l'url "/planning/:id/todo/:id",
   * ainsi cela recharge le component en question, dans ce cas precis la méthode est appelé ci-dessus
   * a chaques fois que le staus d'une tache est mis à jour
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl("/planning/" + this.user.id +"/todo", {skipLocationChange: true}).then(() => {
=======
    this.myPlanningService.updateTodoStatus(todoId, newForm).subscribe();
    this.reloadCurrentRoute()
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
>>>>>>> e8c56b9075bdb7d78c33771e70515fa9b3b66838
        this.router.navigate([currentUrl]);
    });
}

}

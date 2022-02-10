import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';
import { TodoTemplate } from '../../models/todoTemplate';
import { TodoTemplateService } from '../todo-template.service';

@Component({
  selector: 'app-todo-template-detail',
  templateUrl: './todo-template-detail.component.html',
  styleUrls: ['./todo-template-detail.component.scss']
})
export class TodoTemplateDetailComponent implements OnInit {

  todoTemplate: TodoTemplate = {} as TodoTemplate

  constructor(

    private myService: TodoTemplateService,
    private router: Router,
    private route: ActivatedRoute

  ) { 
      /**
       * écoute l'url lors du chargement de la page 
       * et lors de la fermeture de la page.
       * Ceci permet de fairte un ngOnit à chaque changement d'id dans l'url pour 
       * ainsi recharger le component en faisant la méthode getUser
       * et donc afficher le user adequat
       */
       this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) 
        {
          console.log("test")
          const currentRoute = this.router.url;
          
        }
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
     * souscrit à la méthode getUser dans le service avec comme 
     * parametre l'id récuperé depuis l'url
     */
     this.myService.getTodoTemplate().subscribe((t => this.todoTemplate = t));
  }

  deleteTodoTemplateByid(id: number)
  {
    if(window.confirm("Supprimer ce modèle de tâche"))
    {
      this.myService.deleteTodoTemplate(id).subscribe();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { User } from '../models/user';
import { SoftwareService } from '../software.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  //represente ma liste de Users
  users: User[] = []
  //represente un objet User
  user: User = {} as User


  constructor(
    private myService: SoftwareService,
    private route: ActivatedRoute,
    private router: Router
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
    var id = this.route.snapshot.url[1].path;
    this.myService.getUser(id).subscribe((u => this.user = u));
    console.log(id);
    
  }

  /**
   * Au clic du bouton deleteById dans le component html user
   * souscrit à la méthode deleteUser du service software
   */
   deleteUserById(id: number)
   {
     if(window.confirm("Supprimer cet utilisateur ?"))
     {
      this.myService.deleteUser(id).subscribe();
     }  
   }

}

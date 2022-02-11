import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { User } from '../../models/user';
import { UserService } from '../user.service';


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
  specialization: Specialization = {} as Specialization


  constructor(private myService: UserService, private route: ActivatedRoute, private router: Router)
  {
    /**
     * écoute l'url lors du chargement de la page 
     * et lors de la fermeture de la page.
     * Ceci permet de fairte un ngOnit à chaque changement d'id dans l'url pour 
     * ainsi recharger le component en faisant la méthode getUser
     * et donc afficher le user adequat
     */
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        var stringUrl = this.router.url;
        var id = stringUrl.match(/\d+/g);
        if(stringUrl === "/user/" +id){
          this.ngOnInit();
        }
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    })
  }

  ngOnInit(): void {  
    this.myService.getUser().subscribe((u => this.user = u));   
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
    this.myService.eventUser(id);
    this.router.navigateByUrl("/user");
    }  
  }
   
}

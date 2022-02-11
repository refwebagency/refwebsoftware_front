import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { Client } from '../../models/client';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  //represente ma liste de clients
  clients: Client[] = []
  //represente un objet client
  client: Client = {} as Client
  specialization: Specialization = {} as Specialization


  constructor(
    private myService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
      /**
       * écoute l'url lors du chargement de la page 
       * et lors de la fermeture de la page.
       * Ceci permet de fairte un ngOnit à chaque changement d'id dans l'url pour 
       * ainsi recharger le component en faisant la méthode getclient
       * et donc afficher le client adequat
       */
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          var stringUrl = this.router.url;
          var id = stringUrl.match(/\d+/g);
          if(stringUrl == "/client/"+id){
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
     * souscrit à la méthode getclient dans le service avec comme 
     * parametre l'id récuperé depuis l'url
     */
    this.myService.getClient().subscribe((u => this.client = u));  
  }

  /**
  * Au clic du bouton deleteById dans le component html client
  * souscrit à la méthode deleteclient du service software
  */
  deleteclientById(id: number)
  {
    if(window.confirm("Supprimer ce client ?"))
    {
    this.myService.deleteClient(id).subscribe();
    setTimeout(() => this.myService.eventClient(id), 1000);
    this.router.navigateByUrl("/client");
    }  
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { SpecializationService } from '../specialization.service';


@Component({
  selector: 'app-specialization-detail',
  templateUrl: './specialization-detail.component.html',
  styleUrls: ['./specialization-detail.component.scss']
})
export class SpecializationDetailComponent implements OnInit {

  //represente ma liste de specializations
  specializations: Specialization[] = []
  //represente un objet specialization
  specialization: Specialization = {} as Specialization

  constructor(
    private myService: SpecializationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
      /**
       * écoute l'url lors du chargement de la page 
       * et lors de la fermeture de la page.
       * Ceci permet de fairte un ngOnit à chaque changement d'id dans l'url pour 
       * ainsi recharger le component en faisant la méthode getspecialization
       * et donc afficher le specialization adequat
       */
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          var stringUrl = this.router.url;
          var id = stringUrl.match(/\d+/g);
          if(stringUrl === "/specialization/" + id){
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
     * souscrit à la méthode getspecialization dans le service avec comme 
     * parametre l'id récuperé depuis l'url
     */
    // var id = this.route.snapshot.url[1].path;
    this.myService.getSpecialization().subscribe((u => this.specialization = u));
    //console.log(id);
    
  }

  /**
   * Au clic du bouton deleteById dans le component html specialization
   * souscrit à la méthode deletespecialization du service software
   */
   deleteSpecializationById(id: number)
   {
     if(window.confirm("Supprimer cette spécialisation ?"))
     {
      this.myService.deleteSpecialization(id).subscribe();
      setTimeout(() => this.myService.eventSpecialization(id), 1000);
      this.router.navigateByUrl("/specialization");
     }  
   }

}

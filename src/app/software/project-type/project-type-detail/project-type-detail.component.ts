import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';
import { ProjectType } from '../../models/projectType';
import { ProjectTypeService } from '../project-type.service';

@Component({
  selector: 'app-project-type-detail',
  templateUrl: './project-type-detail.component.html',
  styleUrls: ['./project-type-detail.component.scss']
})
export class ProjectTypeDetailComponent implements OnInit {

  projectType: ProjectType = {} as ProjectType

  constructor(

    private myService : ProjectTypeService,
    private router : Router,
    private route : ActivatedRoute

  ) { 
    
    /**
    * écoute l'url lors du chargement de la page 
    * et lors de la fermeture de la page.
    * Ceci permet de fairte un ngOnit à chaque changement d'id dans l'url pour 
    * ainsi recharger le component en faisant la méthode getProjectType
    * et donc afficher le user adequat
    */
   this.router.events.subscribe((event: Event) => {
     if (event instanceof NavigationEnd) {
      var stringUrl = this.router.url;
      var id = stringUrl.match(/\d+/g);
      if(stringUrl === "/projecttype/" + id){
        this.ngOnInit();
      }
    }
     if (event instanceof NavigationError) {
       
       console.log(event.error);
   }
   })
}

ngOnInit(): void {

 this.myService.getProjectType().subscribe((pt => this.projectType = pt));
 
}

/**
* Au clic du bouton deleteById dans le component html user
* souscrit à la méthode deleteUser du service software
*/
deleteProjectTypeById(id: number)
{
  if(window.confirm("Supprimer ce type de projet ?"))
  {
   this.myService.deleteProjectType(id).subscribe();
   setTimeout(() => this.myService.eventProjectType(id), 1000);
   this.router.navigateByUrl("/projecttype");
  }  
}


}

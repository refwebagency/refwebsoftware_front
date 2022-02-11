import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event, NavigationEnd, NavigationError } from '@angular/router';
import { Client } from '../../models/client';
import { QuotePdf } from '../../models/quotePdf';
import { QuotePdfService } from '../quote-pdf.service';

@Component({
  selector: 'app-quote-pdf-detail',
  templateUrl: './quote-pdf-detail.component.html',
  styleUrls: ['./quote-pdf-detail.component.scss']
})
export class QuotePdfDetailComponent implements OnInit {

  quotePdf: QuotePdf = {} as QuotePdf
  client: Client = {} as Client

  constructor(
    private myService: QuotePdfService,
    private router: Router
  ) {
    /**
     * écoute l'url lors du chargement de la page 
     * et lors de la fermeture de la page.
     * Ceci permet de fairte un ngOnit à chaque changement d'id dans l'url pour 
     * ainsi recharger le component en faisant la méthode getQUotePdf
     * et donc afficher le devis adequat
     */
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) 
      {
        console.log("test")
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
     * soucrit aux différentes méthodes lors de l'initialisation du component
     */
    this.myService.getQuotePdf().subscribe((pdf => this.quotePdf = pdf));
    console.log(this.quotePdf.id);
    this.myService.getClient(this.quotePdf.project.clientId).subscribe((c => this.client = c))
    if(this.quotePdf.project.clientId === null)
    {
      console.log("client inconnu")
    }
  }

  startProjectByQuotePdfId(id: number)
  {
    if(window.confirm("Lancer ce projet ?"))
    {
      this.myService.acceptQuotePdf(id).subscribe() 
      // delai d'une seconde pour d'executer le dispatch 
      // sinon les deux méthodes s'exutent en même temps
      // et donc pas de dispacth d'user sur les tâches
      setTimeout(() => this.dispatch(), 1000)
    }

  }
  
  dispatch()
  {
    this.myService.dispatchTodo().subscribe()
    
  }

  deleteQuotePdfById(id: number)
  {
    if(window.confirm("Supprimer ce devis ?"))
    {
      this.myService.deleteQuotePdf(id).subscribe();
      this.router.navigateByUrl("/quotepdf");
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { Client } from '../../models/client';

import { ClientService } from '../client.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {

  client: Client = {} as Client
  
  constructor(private myService: ClientService, private router: Router, private route: ActivatedRoute) 
  { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) 
      {
      }
      if (event instanceof NavigationEnd) 
      {
        var currentRoute = this.router.url;
        var id = currentRoute.match(/\d+/g);

        if(currentRoute == "/client/"+id)
        {
        this.ngOnInit();
        }
      }
      if (event instanceof NavigationError) 
      {
        console.log(event.error);
      }
    })
  }

  ngOnInit(): void {
    console.log("ngoninit");
    this.myService.getClient().subscribe(c => this.client = c);
    this.myService.getClient().subscribe(res => console.log(res));
  
  }

  deleteClient(id: any)
  {
    if(window.confirm("Supprimer ce client ?"))
    {
      this.myService.deleteClient(id).subscribe();
      this.myService.getClients().subscribe();
    }
  }
  
}

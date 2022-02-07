import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { SoftwareService } from 'src/app/software/software.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  client:boolean = false;
  detailClient: boolean = false;
  addClient: boolean = false;
  updateClient: boolean = false;

  user:boolean = false;
  detailUser: boolean = false;
  addUser: boolean = false;
  updateUser: boolean = false;
  
  constructor(private myService: SoftwareService, private router: Router)
  { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) 
      {
        console.log("start ouk ouk")
      }
      if (event instanceof NavigationEnd) {

        var route = this.router.url;
        var id = route.match(/\d+/g);
        const currentRoute = this.router.url;

        // list-user component
        if(currentRoute == "/user" || currentRoute == "/user/"+id)
        { 
          this.user = true;
        }
        else
        {
          this.user = false;
        }

        // detail-user component
        if(currentRoute == "/user/"+id)
        { 
          this.detailUser = true;
        }
        else
        {
          this.detailUser = false;
        }

        // add-user component
        if(currentRoute == "/user/addUser")
        { 
          this.addUser = true;
        }
        else
        { 
          this.addUser = false;
        }

        // update-user component
        if(currentRoute == "/user/updateUser/"+id)
        { 
          this.updateUser = true;
        }
        else
        { 
          this.updateUser = false;
        }

        // list-client component
        if(currentRoute == "/client" || currentRoute == "/client/"+id)
        {
          this.client = true;
        }
        else
        { 
          this.client = false;
        }

        // detail-client component
        if(currentRoute == "/client/"+id)
        { 
          this.detailClient = true;
        }
        else
        { 
          this.detailClient = false;
        }

        // add-client component
        if(currentRoute == "/client/addClient")
        { 
          this.addClient = true;
        }
        else
        { 
          this.addClient = false;
        }

        // update-client component
        if(currentRoute == "/client/updateClient/"+id)
        { 
          this.updateClient = true;
        }
        else
        { 
          this.updateClient = false;
        }
        console.log("CurrentRoute : " + currentRoute); 
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    })
  }

  ngOnInit(): void {
  }
    
}

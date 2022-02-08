import { Component } from '@angular/core';
import { NavigationEnd, NavigationError, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-refweb';

  login: boolean = false;
 

  constructor(public router: Router)
  { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        
        const currentRoute = this.router.url;

        // login components
        if(currentRoute == "/login")
        { 
          this.login = true;
        }
        else
        {
          this.login = false;
        }    
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    })
  }
}

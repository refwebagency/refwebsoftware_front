import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import { SoftwareService } from '../software.service';

interface userDetail {
  id: number,
  name: string
}

@Component({
  selector: 'app-secondary-content',
  templateUrl: './secondary-content.component.html',
  styleUrls: ['./secondary-content.component.scss']
})
export class SecondaryContentComponent implements OnInit {

  //represente ma liste de Users
  users: User[] = []
  user: User = {} as User
  userX!: Observable<User>

  constructor(
    private myService: SoftwareService,
    private route: ActivatedRoute,
    private router: Router
  ) {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) 
        {
          console.log("ouk ouk")
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

    this.userX; 
    var id = this.route.snapshot.url[1].path;
    this.myService.getUser(id).subscribe((u => this.user = u));
    //if(id === this.user.id)
    console.log(id);
    
    //window.location.reload();
  }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   var idInUrl = this.route.snapshot.url[1].path;
  //   this.myService.getUser(idInUrl).subscribe((u => this.user = u));
    
  // }

  // ngDoCheck(): void {
      

  //   var idInUrl = this.route.snapshot.url[1].path;
  //   this.myService.getUser(idInUrl).subscribe((u => this.user = u));
  // }

  // getUserById(id: number)
  // {
  //   this.myService.getUsers().subscribe(res => console.log(res));
  // }

}

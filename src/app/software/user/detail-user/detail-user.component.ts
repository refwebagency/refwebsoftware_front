import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { User } from '../../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  user: User = {} as User;
  specialization: Specialization = {} as Specialization;
  
  constructor(private myService: UserService, private router: Router, private route: ActivatedRoute) 
  { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) 
      {
      }
      if (event instanceof NavigationEnd) {
        
        var currentRoute = this.router.url;
        var id = currentRoute.match(/\d+/g);  

        if(currentRoute == "/user/"+id)
        {
        this.ngOnInit();
        }
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    })
  }

  ngOnInit(): void {

    this.myService.getUser().subscribe(c => this.user = c);
    this.myService.getUser().subscribe(res => console.log(res));
    // this.myService.getSpecialization().subscribe(s => this.specialization = s);
  }

  deleteUser(id: any)
  {
    if(window.confirm("Supprimer cet user ?"))
    {
      this.myService.deleteUser(id).subscribe();
      this.myService.getUsers().subscribe();
    }
  }

}

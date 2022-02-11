import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, NavigationError, Router, Event, NavigationStart } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { User } from '../../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  //represente ma liste de Users
  users: User[] = []
  user: User = {} as User
  searchTerm!: string;
  specialization: Specialization = {} as Specialization

  //Initialisation d'une variable pour récuperer le typage du service
  constructor(private router: Router, private myService: UserService)
  {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    }) 

    this.myService.userChange.subscribe(() => {
      this.myService.getUsers().subscribe(c => this.users = c);
      console.log("getUsers() pour sidebar2 déclenché")
    })
  }

  ngOnInit(): void {
  }
 
}

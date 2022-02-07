import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  //represente ma liste de Users
  users: User[] = []
  user: User = {} as User
  searchUser!: string

  //Initialisation d'une variable pour récuperer le typage du service
  constructor(private myService: UserService, private router: Router, private route: ActivatedRoute) { }

  /**
   * à chaques nouveaux changement d'états, execute la requete getUsers
   */
  ngOnInit(): void {
    this.myService.getUsers().subscribe(u => this.users = u);
  }
  
}
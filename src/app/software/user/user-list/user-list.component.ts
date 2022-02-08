import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  //Initialisation d'une variable pour récuperer le typage du service
  constructor(
    private myService: UserService
  ) { }

  /**
   * à chaques nouveaux changement d'états, execute la requete getUsers
   */
  ngOnInit(): void {

    this.myService.getUsers().subscribe(u => this.users = u);
    
  }

}

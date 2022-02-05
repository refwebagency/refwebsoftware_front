import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { SoftwareService } from '../software.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  //represente ma liste de Users
  users: User[] = []
  user: User = {} as User

  //Initialisation d'une variable pour récuperer le typage du service
  constructor(
    private myService: SoftwareService,
    private router: Router
  ) { }

  /**
   * à chaques nouveaux changement d'états, execute la requete getUsers
   */
  ngOnInit(): void {

    this.myService.getUsers().subscribe(u => this.users = u);
    
  }

  /**
   * Au clic du bouton deleteById dans le component html user
   * souscrit à la méthode deleteUser du service software
   */
  deleteUserById(id: number)
  {
    this.myService.deleteUser(id).subscribe();
  }

}

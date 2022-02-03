import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { SoftwareService } from '../software.service';

@Component({
  selector: 'app-principal-content',
  templateUrl: './principal-content.component.html',
  styleUrls: ['./principal-content.component.scss']
})
export class PrincipalContentComponent implements OnInit {

  //represente ma liste de Users
  users: User[] = []

  //Initialisation d'une variable pour récuperer le typage du service
  constructor(
    private myService: SoftwareService
  ) { }

  /**
   * à chaques nouveaux changement d'états, execute la requete getUsers
   */
  ngOnInit(): void {

    this.myService.getUsers().subscribe(u => this.users = u);
    
  }

  // getUserById(id: number)
  // {
  //   this.myService.getUser(id).subscribe(res => console.log(res));
  // }

}

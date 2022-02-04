import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, Observable, repeat } from 'rxjs';
import { Client } from './models/client';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {


  //Users represente la liste des users
  private user: User[] = []

  private client: Client[] = []

  /** 
    * @param Injection de la dependance HttpClient, en private  
    * pour eviter de devoir déclarer une proprieté et ainsi de faire une
    * initialisation du service http pour faire des requêtes http
  */ 

  constructor(

    private http: HttpClient,
    private route: Router
  ) { }

  /**
   * @returns l'observable dans lequel on va avoir la liste des users
   */

  getUsers(): Observable<User[]>
  {
    return this.http.get<User[]>("https://localhost:2001/user").pipe(
      delay(1000),repeat()
    );
  }

  /**
   * @returns l'observable dans lequel on va avoir la liste des clients
   */

   getClients(): Observable<Client[]>
   {
     return this.http.get<Client[]>("https://localhost:1001/client").pipe(
       delay(1000),repeat()
     );
   }



  getUser(id: string): Observable<User>
  {
    // var stringUrl = this.route.url;
    // var id = stringUrl.match(/\d+/g);
    // console.log(id);
    let userById = "https://localhost:2001/user/" + id;
    return this.http.get<User>(userById);
  }
}

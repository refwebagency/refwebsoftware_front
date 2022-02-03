import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, repeat } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {


  //Users represente la liste des users
  private user: User[] = []

  /** 
    * @param Injection de la dependance HttpClient, en private  
    * pour eviter de devoir déclarer une proprieté et ainsi de faire une
    * initialisation du service http pour faire des requêtes http
  */ 

  constructor(

    private http: HttpClient
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

  getUser(id: number): Observable<User>
  {
    let userById = "https://localhost:2001/user/" + id;
    return this.http.get<User>(userById);
  }
}

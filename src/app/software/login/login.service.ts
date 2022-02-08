import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /** 
   * @param Injection de la dependance HttpClient, en private  
   * pour eviter de devoir déclarer une proprieté et ainsi de faire une
   * initialisation du service http pour faire des requêtes http
 */  
 constructor(private http: HttpClient) { }

  getUserByEmail(email: string)
   {
     return this.http.get<User>("https://localhost:2001/user/email/" + email);
   } 
}

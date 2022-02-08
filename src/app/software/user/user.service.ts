import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, repeat } from 'rxjs';
import { Specialization } from '../models/specialization';
import { User } from '../models/user';
import { UserUpdate } from '../models/userUpdate';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   //Users represente la liste des users
   private user: User[] = []
   /** 
    * @param Injection de la dependance HttpClient, en private  
    * pour eviter de devoir déclarer une proprieté et ainsi de faire une
    * initialisation du service http pour faire des requêtes http
  */  
  constructor(
    private route: Router,
    private http: HttpClient

  ) { }

  /**
   * @returns l'observable dans lequel on va avoir la liste des users
   */

   getUsers(): Observable<User[]>
   {
     return this.http.get<User[]>("https://localhost:2001/user").pipe(
       delay(1000), repeat()
     )
   } 

   /**
    * @returns un observable de User
    */
    getUser(): Observable<User>
    {
      var stringUrl = this.route.url;
      var id = stringUrl.match(/\d+/g);
      // console.log(id);
      let userById = "https://localhost:2001/user/" + id;
      return this.http.get<User>(userById);
    }
  
    /**
     * @param user pour créer un nouveau user, omit permet d'exclure l'id
     * car il est auto incrementé lors de sa création
     */
    addUser(user: Omit<User, 'id'>): Observable<User>
    {
      return this.http.post<User>('https://localhost:2001/user', user);
    }

    /**
     * 
     * @param id 
     * @param updateFromData 
     * @returns pour mettre a jour un user
     */
    updateUser(id: number, updateFromData: any): Observable<UserUpdate>
    {
      return this.http.put<UserUpdate>("https://localhost:2001/user/" + id, updateFromData);
    }
  
    /**
     * Pour supprimer un user avec comme parametre un id
     * @returns la méthode delete sur l'url ci dessous
     */
    deleteUser(id:number): Observable<User>{
      let userDelete = "https://localhost:2001/user/" + id;
      return this.http.delete<User>(userDelete);
    }

   /**
    * 
    * @returns l'observable contenant la liste des specializations
    * pour pouvoir assigner une spec lors de la création d'un user
    */
    getSpecializations(): Observable<Specialization[]>
    { 
      return this.http.get<Specialization[]>("https://localhost:4001/specialization");
    }
}
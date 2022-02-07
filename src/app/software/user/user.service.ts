import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, repeat } from 'rxjs';
import { Specialization } from '../models/specialization';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId!: number
  constructor(private http: HttpClient, private router: Router) { }

  getSpecializations(): Observable<Specialization[]>
  {
    return this.http.get<Specialization[]>("https://localhost:4001/specialization");
  }

  // USERS
  getUsers(): Observable<User[]>
  {
    return this.http.get<User[]>("https://localhost:2001/user")
  }

  getUser(): Observable<User>
  {
    var route = this.router.url;
    var id = route.match(/\d+/g);
    let userById = "https://localhost:2001/user/" + id;
    return this.http.get<User>(userById);
  }

  addUser(newFormData: any)
  {
    return this.http.post("https://localhost:2001/user", newFormData);
  }

  updateUser(userId: any, updateFormData: any)
  {
    return this.http.put("https://localhost:2001/user/" + userId, updateFormData);
  }

  deleteUser(userId: any): Observable<User>
  {
    let userDelete = "https://localhost:2001/user/" + userId;
    return this.http.delete<User>(userDelete);
  }
  

}

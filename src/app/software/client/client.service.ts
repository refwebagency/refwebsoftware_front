import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, private router: Router) { }

  // CLIENTS
  getClients(): Observable<Client[]>
  {
    return this.http.get<Client[]>("https://localhost:1001/client");
  }

  getClient(): Observable<Client>
  {
    var route = this.router.url;
    var id = route.match(/\d+/g);
    let clientById = "https://localhost:1001/client/" + id;
    return this.http.get<Client>(clientById);
  }

  addClient(newFormData: any)
  {
    return this.http.post("https://localhost:1001/client", newFormData);
  }

  updateClient(clientId: any, updateFormData: any)
  {
    return this.http.put("https://localhost:1001/client/" + clientId, updateFormData);
  }

  deleteClient(clientId: any): Observable<Client>
  {
    let clientDelete = "https://localhost:2001/Client/" + clientId;
    return this.http.delete<Client>(clientDelete);
  }

}

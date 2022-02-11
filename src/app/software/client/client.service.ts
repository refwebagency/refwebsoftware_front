import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, delay, Observable, repeat } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //clients represente ma liste de Client
  clients: Client[] = []
  clientChange : BehaviorSubject<Client[]> = new BehaviorSubject(this.clients);
   
  /** 
    * @param Injection de la dependance HttpClient, en private  
    * pour eviter de devoir déclarer une proprieté et ainsi de faire une
    * initialisation du service http pour faire des requêtes http
  */ 
  constructor(
    private route: Router,
    private http : HttpClient
    
  ) { }

  eventClient(client: any)
  {
  this.clientChange.next(client);
  }

  /**
  * @returns l'observable dans lequel on va avoir la liste des clients
  */
  getClients(): Observable<Client[]>
  {
    return this.http.get<Client[]>("https://localhost:1001/client"); 
  }

  /**
  * @returns un observable de Client
  */
  getClient(): Observable<Client>
  {
    var stringUrl = this.route.url;
    var id = stringUrl.match(/\d+/g);
    // console.log(id);
    let clientById = "https://localhost:1001/client/" + id;
    return this.http.get<Client>(clientById);
  }

  /**
  * @param client pour créer un nouveau client, omit permet d'exclure l'id
  * car il est auto incrementé lors de sa création
  */
  addClient(client: any): Observable<Client>
  {
  return this.http.post<Client>('https://localhost:1001/client', client);
  }

  /**
  * 
  * @param id 
  * @param updateFromData 
  * @returns pour mettre a jour un client
  */
  updateClient(id: number, updateFromData: any): Observable<Client>
  {
    return this.http.put<Client>("https://localhost:1001/client/" + id, updateFromData);
  }

  /**
   * Pour supprimer un client avec comme parametre un id
   * @returns la méthode delete sur l'url ci dessous
   */
    deleteClient(id:number): Observable<Client>{
    let clientDelete = "https://localhost:1001/client/" + id;
    return this.http.delete<Client>(clientDelete);
  }

}

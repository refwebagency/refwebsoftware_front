import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, repeat } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //clients represente ma liste de Client
  private clients: Client[] = []

   
  /** 
    * @param Injection de la dependance HttpClient, en private  
    * pour eviter de devoir déclarer une proprieté et ainsi de faire une
    * initialisation du service http pour faire des requêtes http
  */ 
  constructor(

    private http : HttpClient
    
  ) { }

  /**
   * @returns l'observable dans lequel on va avoir la liste des clients
   */
   getClients(): Observable<Client[]>
   {
     return this.http.get<Client[]>("https://localhost:1001/client").pipe(
       delay(1000),repeat()
     );
   }
}

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  /** 
    * @param Injection de la dependance HttpClient, en private  
    * pour eviter de devoir déclarer une proprieté et ainsi de faire une
    * initialisation du service http pour faire des requêtes http
  */ 

  constructor() { }

  /**
   * @returns l'observable dans lequel on va avoir la liste des users
   */

}
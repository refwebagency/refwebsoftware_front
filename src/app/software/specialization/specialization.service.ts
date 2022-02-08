import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, repeat } from 'rxjs';
import { Specialization } from '../models/specialization';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

   //Specializations represente la liste des Specializations
   private specialization: Specialization[] = []
   private id!: Specialization
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
   * @returns l'observable dans lequel on va avoir la liste des Specializations
   */

   getSpecializations(): Observable<Specialization[]>
   {
     return this.http.get<Specialization[]>("https://localhost:4001/specialization").pipe(
       delay(1000),repeat()
     );
   } 

   /**
    * @returns un observable de Specialization
    */
    getSpecialization(): Observable<Specialization>
    {
      var stringUrl = this.route.url;
      var id = stringUrl.match(/\d+/g);
      // console.log(id);
      let SpecializationById = "https://localhost:4001/specialization/" + id;
      return this.http.get<Specialization>(SpecializationById);
    }
  
    /**
     * @param specialization pour créer un nouveau Specialization, omit permet d'exclure l'id
     * car il est auto incrementé lors de sa création
     */
    addSpecialization(specialization: Omit<Specialization, 'id'>): Observable<Specialization>
    {
      return this.http.post<Specialization>('https://localhost:4001/specialization', specialization);
    }

    /**
     * 
     * @param id 
     * @param updateFromData 
     * @returns pour mettre a jour un Specialization
     */
    updateSpecialization(id: number, updateFromData: any): Observable<Specialization>
    {
      return this.http.put<Specialization>("https://localhost:4001/specialization/" + id, updateFromData);
    }
  
    /**
     * Pour supprimer un Specialization avec comme parametre un id
     * @returns la méthode delete sur l'url ci dessous
     */
    deleteSpecialization(id:number): Observable<Specialization>{
      let specializationDelete = "https://localhost:4001/specialization/" + id;
      return this.http.delete<Specialization>(specializationDelete);
    }

}
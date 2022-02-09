import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, repeat } from 'rxjs';
import { Client } from '../models/client';
import { ProjectType } from '../models/projectType';
import { QuotePdf } from '../models/quotePdf';
import { Specialization } from '../models/specialization';
import { TodoTemplate } from '../models/todoTemplate';

@Injectable({
  providedIn: 'root'
})
export class QuotePdfService {

  constructor(

    private http : HttpClient,
    private route : Router

  ) { }

  /**
   * @returns un observale la liste de devis
   */
  getQuotesPdf(): Observable<QuotePdf[]>
  {
    return this.http.get<QuotePdf[]>("https://localhost:9001/quotepdf").pipe(
      delay(1000),repeat()
    );
    
  }

  /**
     * @param quotePdf pour créer un nouveau quotePdf, omit permet d'exclure l'id
     * car il est auto incrementé lors de sa création
     */
  addQuotePdf(quotePdf: any): Observable<QuotePdf>
  {
    return this.http.post<QuotePdf>("https://localhost:9001/quotepdf", quotePdf);
  }

  /**
    * 
    * @returns l'observable contenant la liste des specializations
    * pour pouvoir assigner une spec lors de la création d'un todoTemplate
    */
   getSpecializations(): Observable<Specialization[]>
   { 
     return this.http.get<Specialization[]>("https://localhost:4001/specialization");
   }

  /**
    * 
    * @returns l'observable contenant la liste des types de projet
    * pour pouvoir assigner un type de projet lors de la création d'un todoTemplate
    */
   getProjectTypes(): Observable<ProjectType[]>
   { 
     return this.http.get<ProjectType[]>("https://localhost:5001/projecttype");
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

  /**
   * @returns l'observable dans lequel on va avoir la liste des todoTemplate
   */

   getTodoTemplates(): Observable<TodoTemplate[]>
   {
     return this.http.get<TodoTemplate[]>("https://localhost:7001/todotemplate").pipe(
       delay(1000),repeat()
     );
   }

}

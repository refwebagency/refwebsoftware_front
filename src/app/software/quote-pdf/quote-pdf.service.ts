import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, repeat } from 'rxjs';
import { acceptPdf } from '../models/acceptPdf';
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
     * @returns un devis par son id
     */
   getQuotePdf(): Observable<QuotePdf>
   {
     var stringUrl = this.route.url;
     var id = stringUrl.match(/\d+/g);
     let quotePdf = "https://localhost:9001/quotepdf/" + id;
     return this.http.get<QuotePdf>(quotePdf);
   }

  /**
    * Pour supprimer un devis avec comme parametre un id
    * @returns la méthode delete sur l'url ci dessous
    */
    deleteQuotePdf(id:number): Observable<QuotePdf>{
      let quotePdfDelete = "https://localhost:9001/quotepdf/" + id;
      return this.http.delete<QuotePdf>(quotePdfDelete);
  }
  
  /**
   * Dans le cas ou le quotePdf(devis) est validé, envoie le signal au serveur pour post
   * en async le projet du devis dans projectService, et les taches du devis dans todoService
   */
  acceptQuotePdf(id:number): Observable<acceptPdf>
  {
    let acceptPdf = "https://localhost:9001/quotepdf/startproject/" + id;
    return this.http.get<acceptPdf>(acceptPdf);
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
    * @returns un observable de Client
    */
    getClient(id:number): Observable<Client>
    {
      // var stringUrl = this.route.url;
      // var id = stringUrl.match(/\d+/g);
      // // console.log(id);
      let clientById = "https://localhost:1001/client/" + id;
      return this.http.get<Client>(clientById);
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

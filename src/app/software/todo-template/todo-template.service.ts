import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, repeat } from 'rxjs';
import { ProjectType } from '../models/projectType';
import { Specialization } from '../models/specialization';
import { TodoTemplate } from '../models/todoTemplate';

@Injectable({
  providedIn: 'root'
})
export class TodoTemplateService {

  //todoTemplate represente ma liste de template de taches
  todoTemplates: TodoTemplate[] = []
  todoTemplate: TodoTemplate = {} as TodoTemplate
  constructor(

    private http: HttpClient,
    private route: Router

  ) { }

  /**
   * @returns l'observable dans lequel on va avoir la liste des todoTemplate
   */

   getTodoTemplates(): Observable<TodoTemplate[]>
   {
     return this.http.get<TodoTemplate[]>("https://localhost:7001/todotemplate").pipe(
       delay(1000),repeat()
     );
   }

  /**
  * 
  * @param todoTemplate 
  * @returns un modèle de tache par son id
  */
   getTodoTemplate(): Observable<TodoTemplate>
   {
    let stringUrl = this.route.url;
    let id = stringUrl.match(/\d+/g);
    let todoTemplate = "https://localhost:7001/todotemplate/" + id;
    return this.http.get<TodoTemplate>(todoTemplate);
   }

  /**
  * @param todoTemplate pour créer un nouveau modèle de tache, omit permet d'exclure l'id
  * car il est auto incrementé lors de sa création
  */
   addTodoTemplate(todoTemplate: any): Observable<TodoTemplate>
   {
     return this.http.post<TodoTemplate>('https://localhost:7001/todotemplate', todoTemplate)
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
     * 
     * @param id 
     * @param updateFromData 
     * @returns pour mettre a jour un todoTemplate
     */
     updateTodoTemplate(id: any, updateFromData: any): Observable<TodoTemplate>
     {
       return this.http.put<TodoTemplate>("https://localhost:7001/todotemplate/update/" + id, updateFromData);
     }

    deleteTodoTemplate(id: number): Observable<TodoTemplate>
    {
      let todoTemplateDelete = "https://localhost:7001/todotemplate/" + id;
      return this.http.delete<TodoTemplate>(todoTemplateDelete);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, repeat } from 'rxjs';
import { ProjectType } from '../models/projectType';

@Injectable({
  providedIn: 'root'
})
export class ProjectTypeService {

  //projectTypes represente ma liste de projectType
  private projectTypes: ProjectType[] = []

  constructor(

    private http : HttpClient,
    private route : Router

  ) { }

  /**
   * @returns un observable dans lequel on va avoir la liste des type de projets
   */
  getProjectTypes(): Observable<ProjectType[]>
  {
    return this.http.get<ProjectType[]>("https://localhost:5001/projecttype").pipe(
       delay(1000),repeat()
     );
  }

  /**
   * 
   * @param projectType 
   * @returns un type de projet par son id
   */
   getProjectType(): Observable<ProjectType>
   {
     let stringUrl = this.route.url;
     let id = stringUrl.match(/\d+/g);
     let projectTypeId = "https://localhost:5001/projecttype/" + id;
     return this.http.get<ProjectType>(projectTypeId);
   }

  /**
  * @param projectType pour créer un nouveau type de projet, omit permet d'exclure l'id
  * car il est auto incrementé lors de sa création
  */
  addProjectType(projectType: Omit<ProjectType, 'id'>): Observable<ProjectType>
  {
    return this.http.post<ProjectType>('https://localhost:5001/projecttype', projectType);
  }

  /**
   * 
   * @param id 
   * @param updateFromData 
   * @returns un type de projet mis à jour
   */
  updateProjectType(id: number, updateFromData: any): Observable<ProjectType>
  {
    return this.http.put<ProjectType>("https://localhost:5001/projecttype/" + id, updateFromData);
  }  

  /**
  * Pour supprimer un type de projet avec comme parametre un id
  * @returns la méthode delete sur l'url ci dessous
  */
  deleteProjectType(id:number): Observable<ProjectType>
  {
    let projectTypeDelete = "https://localhost:5001/projectType/" + id;
    return this.http.delete<ProjectType>(projectTypeDelete);
  }
}

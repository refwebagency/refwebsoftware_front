import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectType } from '../../models/projectType';
import { ProjectTypeService } from '../project-type.service';

@Component({
  selector: 'app-project-type-list',
  templateUrl: './project-type-list.component.html',
  styleUrls: ['./project-type-list.component.scss']
})
export class ProjectTypeListComponent implements OnInit {

  projectTypes: ProjectType[] = []
  searchTerm!: string;

  constructor(private myService : ProjectTypeService) 
  { 
    this.myService.projectTypeChange.subscribe(() => {
      this.myService.getProjectTypes().subscribe(c => this.projectTypes = c);
      console.log("getProjectTypes() pour sidebar2 declenché")
    })
  }

  ngOnInit(): void {
  }

}

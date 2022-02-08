import { Component, OnInit } from '@angular/core';
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

  constructor(

    private myService : ProjectTypeService

  ) { }

  ngOnInit(): void {

    this.myService.getProjectTypes().subscribe(pt => this.projectTypes = pt);
  }

}

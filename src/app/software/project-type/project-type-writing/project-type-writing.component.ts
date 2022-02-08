import { Component, OnInit } from '@angular/core';
import { ProjectType } from '../../models/projectType';
import { ProjectTypeService } from '../project-type.service';

@Component({
  selector: 'app-project-type-writing',
  templateUrl: './project-type-writing.component.html',
  styleUrls: ['./project-type-writing.component.scss']
})
export class ProjectTypeWritingComponent implements OnInit {

  projectType: ProjectType[] = []

  msgTrue = false;

  constructor(

    private myService : ProjectTypeService

  ) { }

  ngOnInit(): void { }

  
  post(form: any)
  {
    const newFormData = 
    {
      name: form.value.name
    };

    this.myService.addProjectType(newFormData).subscribe(data => {
      console.log(data);
      this.msgTrue = true;
    })
  }
}

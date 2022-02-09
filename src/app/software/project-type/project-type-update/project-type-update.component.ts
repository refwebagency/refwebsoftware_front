import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectType } from '../../models/projectType';
import { ProjectTypeService } from '../project-type.service';

@Component({
  selector: 'app-project-type-update',
  templateUrl: './project-type-update.component.html',
  styleUrls: ['./project-type-update.component.scss']
})
export class ProjectTypeUpdateComponent implements OnInit {

  projectType: ProjectType = {} as ProjectType

  msgTrue = false;

  constructor(

    private myService: ProjectTypeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.myService.getProjectType().subscribe((pt => this.projectType = pt));

  }

  updateProjectType(ptId: any, form: any)
  {
    const newForm = {
      id: ptId,
      name: form.value.name
    };

    this.myService.updateProjectType(ptId, newForm).subscribe(data => {
      this.msgTrue = true;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private myService: ProjectTypeService
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
    setTimeout(() => this.myService.eventProjectType(ptId), 1000);
    this.router.navigateByUrl("/projecttype");
  }

}

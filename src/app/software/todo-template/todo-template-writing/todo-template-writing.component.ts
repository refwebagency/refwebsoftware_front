import { Component, OnInit } from '@angular/core';
import { ProjectType } from '../../models/projectType';
import { Specialization } from '../../models/specialization';
import { TodoTemplateService } from '../todo-template.service';

@Component({
  selector: 'app-todo-template-writing',
  templateUrl: './todo-template-writing.component.html',
  styleUrls: ['./todo-template-writing.component.scss']
})
export class TodoTemplateWritingComponent implements OnInit {

  specializations: Specialization[] = []
  projectType: ProjectType[] = []

  msgTrue = false

  constructor(

    private myService: TodoTemplateService

  ) { }

  ngOnInit(): void {
    this.myService.getSpecializations().subscribe(s => this.specializations = s);
    this.myService.getProjectTypes().subscribe(pt => this.projectType = pt);
  }

  post(form: any)
  {
    const newFormData =
    {
      name: form.value.name,
      experience: form.value.experience,
      description: form.value.description,
      time: form.value.time,
      specializationId: form.value.specialization,
      projectTypeId: form.value.projectType,
    };
    console.log(form.value.specialization);
    console.log(form.value.projectType)

    this.myService.addTodoTemplate(newFormData).subscribe(data => {
      console.log(data);
      this.msgTrue = true
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectType } from '../../models/projectType';
import { Specialization } from '../../models/specialization';
import { TodoTemplate } from '../../models/todoTemplate';
import { TodoTemplateService } from '../todo-template.service';

@Component({
  selector: 'app-todo-template-update',
  templateUrl: './todo-template-update.component.html',
  styleUrls: ['./todo-template-update.component.scss']
})
export class TodoTemplateUpdateComponent implements OnInit {

  //TodoTemplate represente mon objet TodoTemplate
  todoTemplate: TodoTemplate = {} as TodoTemplate
  updateTodoTemplate!: TodoTemplate
  //specializations represente une liste de Specialisations
  specializations: Specialization[] = []
  specialization: Specialization = {} as Specialization
  //specializations represente une liste de Specialisations
  projectTypes: ProjectType[] = []
  projectType: ProjectType = {} as ProjectType

  msgTrue = false;

  constructor(
    private myService: TodoTemplateService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.myService.getTodoTemplate().subscribe((u => this.todoTemplate = u));
    this.myService.getSpecializations().subscribe(s => this.specializations = s);
    this.myService.getProjectTypes().subscribe(s => this.projectTypes = s);
  }

  updateTodoTemplateById(todoTemplateId: any, form: any)
  {
    const newForm = {
      id: todoTemplateId,
      name: form.value.name,
      experience: form.value.experience,
      description: form.value.description,
      time: form.value.time,
      projectId: form.value.projectTypeId,
      specializationId: form.value.specializationId

    };
    this.myService.updateTodoTemplate(todoTemplateId, newForm).subscribe(data => {
      this.msgTrue = true;
    })
    setTimeout(() => this.myService.eventTodoTemplate(todoTemplateId), 1000);
    this.route.navigateByUrl("/todotemplate");
  }

}

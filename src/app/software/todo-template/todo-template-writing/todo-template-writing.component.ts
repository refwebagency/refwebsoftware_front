import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectType } from '../../models/projectType';
import { Specialization } from '../../models/specialization';
import { TodoTemplateService } from '../todo-template.service';

@Component({
  selector: 'app-todo-template-writing',
  templateUrl: './todo-template-writing.component.html',
  styleUrls: ['./todo-template-writing.component.scss']
})
export class TodoTemplateWritingComponent implements OnInit {

  newTodoTemplate!: FormGroup
  specializations: Specialization[] = []
  projectType: ProjectType[] = []

  msgTrue = false

  constructor(

    private myService: TodoTemplateService

  ) { }

  ngOnInit(): void {
    this.myService.getSpecializations().subscribe(s => this.specializations = s);
    this.myService.getProjectTypes().subscribe(pt => this.projectType = pt);
    this.newTodoTemplate = this.createFormGroup();
  }

   //Pour génerer mon formulaire, validators permet de rendre la saisie d'un champ
  //obligatoire, pour chaque proprietés  
  createFormGroup(): FormGroup {
    return new FormGroup ({
      name: new FormControl("",[Validators.required]),
      experience: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      time: new FormControl("",[Validators.required]),
      specializationId: new FormControl("",[Validators.required]),
      projectTypeId: new FormControl("",[Validators.required])
    })
  }

  
  post()
  {
    this.myService.addTodoTemplate(this.newTodoTemplate.value).subscribe(data => {
      console.log(data);
      this.msgTrue = true
    })
  }

}

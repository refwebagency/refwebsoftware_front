import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectType } from '../../models/projectType';
import { ProjectTypeService } from '../project-type.service';

@Component({
  selector: 'app-project-type-writing',
  templateUrl: './project-type-writing.component.html',
  styleUrls: ['./project-type-writing.component.scss']
})
export class ProjectTypeWritingComponent implements OnInit {

  newProjectType!: FormGroup;
  projectType: ProjectType[] = []

  msgTrue = false;

  constructor(
    private route: Router,
    private myService : ProjectTypeService

  ) { }

  ngOnInit(): void { this.newProjectType = this.createFormGroup();
  }

  //Pour génerer mon formulaire, validators permet de rendre la saisie d'un champ
  //obligatoire, pour chaque proprietés  
  createFormGroup(): FormGroup {
    return new FormGroup ({
      name: new FormControl("",[Validators.required]),
    })
  }

  /**
   * Au clic du bouton submit dans le formulaire, récupere les valeurs
   * de newProjectType
   */
   post(){
     console.log(this.newProjectType.value.id);
    this.myService.addProjectType(this.newProjectType.value).subscribe();
    setTimeout(() => this.myService.eventProjectType(this.newProjectType.value), 1000);
    this.route.navigateByUrl("/projecttype");
  }
}

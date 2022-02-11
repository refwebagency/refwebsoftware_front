import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { SpecializationService } from '../specialization.service';

@Component({
  selector: 'app-specialization-writing',
  templateUrl: './specialization-writing.component.html',
  styleUrls: ['./specialization-writing.component.scss']
})
export class SpecializationWritingComponent implements OnInit {

  newSpecialization!: FormGroup;
  specializations: Specialization[] = []
  msgTrue = false;

  constructor(
    private route: Router,
    private myService: SpecializationService
  ) { }

  ngOnInit(): void {
    this.myService.getSpecializations().subscribe(s => this.specializations = s);
    // genere le formulaire a l'initialisation du component
    this.newSpecialization = this.createFormGroup();
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
   * de newSpecialization
   */
   post(){
     console.log(this.newSpecialization.value.id);
    this.myService.addSpecialization(this.newSpecialization.value).subscribe(data => {
      this.msgTrue = true
    });
  }

}

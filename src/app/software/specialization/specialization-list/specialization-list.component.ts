import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { SpecializationUpdateComponent } from '../specialization-update/specialization-update.component';
import { SpecializationService } from '../specialization.service';


@Component({
  selector: 'app-specialization-list',
  templateUrl: './specialization-list.component.html',
  styleUrls: ['./specialization-list.component.scss']
})
export class SpecializationListComponent implements OnInit {

  //represente ma liste de Specializations
  specializations: Specialization[] = []
  specialization: Specialization = {} as Specialization
  searchTerm!: string;

  //Initialisation d'une variable pour récuperer le typage du service
  constructor(private myService: SpecializationService) 
  { 
    this.myService.specializationChange.subscribe(() => {
      this.myService.getSpecializations().subscribe(c => this.specializations = c);
      console.log("getSpecialization() pour sidebar2 déclenché")
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specialization } from '../../models/specialization';
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
  constructor(
    private myService: SpecializationService,
    private router: Router
  ) { }

  /**
   * à chaques nouveaux changement d'états, execute la requete getSpecializations
   */
  ngOnInit(): void {

    this.myService.getSpecializations().subscribe(s => this.specializations = s);
    
  }

}

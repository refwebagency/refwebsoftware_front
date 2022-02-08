import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { SpecializationService } from '../specialization.service';

@Component({
  selector: 'app-specialization-update',
  templateUrl: './specialization-update.component.html',
  styleUrls: ['./specialization-update.component.scss']
})
export class SpecializationUpdateComponent implements OnInit {

  //Specialization represente mon objet Specialization
  specialization: Specialization = {} as Specialization
  updateSpecialization!: Specialization

  msgTrue = false;

  constructor(

    private myService: SpecializationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // var id = this.route.snapshot.url[1].path;
    this.myService.getSpecialization().subscribe((u => this.specialization = u));

  }

  updateSpecializationById(specializationId: any, form: any)
  {
    const newForm = {
      id: specializationId,
      name: form.value.name
    };

    this.myService.updateSpecialization(specializationId, newForm).subscribe(data => {
      this.msgTrue = true;
    })
  }

}

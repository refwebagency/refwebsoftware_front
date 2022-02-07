import { Component, OnInit } from '@angular/core';
import { Specialization } from '../../models/specialization';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  specializations: Specialization[] = []
  msgTrue = false;

  constructor(private myService: UserService) { }

  ngOnInit(): void {
    this.myService.getSpecializations().subscribe(s => this.specializations = s);
  }

  addUser(form: any) {
    const newFormData = { 
      id: form.value.id, 
      name: form.value.name, 
      lastname: form.value.lastname, 
      address: form.value.address, 
      phone: form.value.phone, 
      email: form.value.email, 
      experience: form.value.experience,
      specializationId: form.value.specialization 
    };

    this.myService.addUser(newFormData).subscribe(data => {
      console.log(data);
      this.msgTrue = true;
    });
  }

}

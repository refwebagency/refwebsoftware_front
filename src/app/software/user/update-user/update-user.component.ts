import { Component, OnInit } from '@angular/core';
import { Specialization } from '../../models/specialization';
import { User } from '../../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  specializations: Specialization[] = []
  specialization: Specialization = {} as Specialization
  user: User = {} as User;
  
  msgTrue = false;

  constructor(private myService: UserService) { }

  ngOnInit(): void {
    this.myService.getUser().subscribe(c => this.user = c);
    this.myService.getUser().subscribe(res => console.log(res));
    this.myService.getSpecializations().subscribe(s => this.specializations = s);
  }

  updateUser(userId: any, form: any) {
    const newFormData = { 
      id: userId, 
      name: form.value.name, 
      lastname: form.value.lastname, 
      address: form.value.address, 
      phone: form.value.phone, 
      email: form.value.email, 
      experience: form.value.experience,
      specializationId: form.value.specialization,
      password: form.value.password
    };
      this.myService.updateUser(userId, newFormData).subscribe(data => {
      this.msgTrue = true;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specialization } from '../../models/specialization';
;
import { User } from '../../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  //user represente mon objet user
  user: User = {} as User
  updateUser!: User
  //specializations represente une liste de Specialisations
  specializations: Specialization[] = []
  specialization: Specialization = {} as Specialization

  msgTrue = false;

  constructor(

    private myService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    var id = this.route.snapshot.url[1].path;
    this.myService.getUser(id).subscribe((u => this.user = u));
    this.myService.getSpecializations().subscribe(s => this.specializations = s);

  }

  updateUserById(userId: any, form: any)
  {
    const newForm = {
      id: userId,
      name: form.value.name,
      lastName: form.value.lastName,
      address: form.value.address,
      phone: form.value.phone,
      email: form.value.email, 
      password: form.value.password,
      experience: form.value.experience,
      specializationId: form.value.specialization

    };
    console.log(newForm.specializationId);
    this.myService.updateUser(userId, newForm).subscribe(data => {
      this.msgTrue = true;
    })
  }

}

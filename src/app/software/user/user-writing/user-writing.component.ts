import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-writing',
  templateUrl: './user-writing.component.html',
  styleUrls: ['./user-writing.component.scss']
})
export class UserWritingComponent implements OnInit {

  newUser!: FormGroup;
  specializations: Specialization[] = []

  constructor(
    private route: Router,
    private myService: UserService
  ) { }

  ngOnInit(): void {
    this.myService.getSpecializations().subscribe(s => this.specializations = s);
    // genere le formulaire a l'initialisation du component
    this.newUser = this.createFormGroup();
  }

  //Pour génerer mon formulaire, validators permet de rendre la saisie d'un champ
  //obligatoire, pour chaque proprietés  
  createFormGroup(): FormGroup {
    return new FormGroup ({
      name: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required]),
      experience: new FormControl("",[Validators.required]),
      specializationId: new FormControl("",[Validators.required])
    })
  }

  /**
   * Au clic du bouton submit dans le formulaire, récupere les valeurs
   * de newUser
   */
   post(){ 
    console.log(this.newUser.value.id);
    this.myService.addUser(this.newUser.value).subscribe();
    this.route.navigateByUrl("/user");
  }

}

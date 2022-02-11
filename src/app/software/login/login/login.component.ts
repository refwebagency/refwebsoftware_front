import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { delay, repeat } from 'rxjs';
import { User } from '../../models/user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //user represente mon objet user
  user: User = {} as User

  msgTrue = false;

  login!: FormGroup

  constructor(
    private route: Router,
    private myService: LoginService
  ) { }

  ngOnInit(): void {
    // var id = this.route.snapshot.url[1].path;
    this.login = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup ({
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    })
  }
  
  /**
  * Au clic du bouton submit dans le formulaire, récupere les valeurs
  * de newSpecialization
  */
  post(){ 
    this.myService.getUserByEmail(this.login.value.email).subscribe(u => this.user = u);
    setTimeout(() => this.redirectDev(), 2000)
    
  }

  redirectDev()
  {
    if(this.user.email === this.login.value.email  && this.user.password === this.login.value.password) 
    {
      window.location.replace("/planning/" + this.user.id +"/todo");
    }
    else if(this.login.value.email === "admin" && this.login.value.password === "admin")
    {
      this.route.navigateByUrl("/client");
    }
    else
    {
      this.msgTrue = true;
    }
  }
  
}

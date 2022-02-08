import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-writing',
  templateUrl: './client-writing.component.html',
  styleUrls: ['./client-writing.component.scss']
})
export class ClientWritingComponent implements OnInit {

  newClient!: FormGroup;
  specializations: Specialization[] = []

  constructor(
    private route: Router,
    private myService: ClientService
  ) { }

  ngOnInit(): void {
    // genere le formulaire a l'initialisation du component
    this.newClient = this.createFormGroup();
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
      company: new FormControl("",[Validators.required])
    })
  }

  /**
   * Au clic du bouton submit dans le formulaire, récupere les valeurs
   * de newclient
   */
   post(){
     console.log(this.newClient.value.id);
    this.myService.addClient(this.newClient.value).subscribe();
    this.route.navigateByUrl("/client");
  }

}

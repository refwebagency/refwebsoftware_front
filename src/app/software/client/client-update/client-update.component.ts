import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss']
})
export class ClientUpdateComponent implements OnInit {

  //Client represente mon objet Client
  client: Client = {} as Client
  updateClient!: Client

  msgTrue = false;

  constructor(

    private myService: ClientService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.myService.getClient().subscribe((u => this.client = u));
  }

  updateClientById(clientId: any, form: any)
  {
    const newForm = {
      id: clientId,
      name: form.value.name,
      lastName: form.value.lastName,
      address: form.value.address,
      phone: form.value.phone,
      email: form.value.email, 
      company: form.value.company,
    };

    this.myService.updateClient(clientId, newForm).subscribe(data => {
      this.msgTrue = true;
    })
    setTimeout(() => this.myService.eventClient(clientId), 1000);
    this.route.navigateByUrl("/client");
  }

}

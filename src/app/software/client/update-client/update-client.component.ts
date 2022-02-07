import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {

  client: Client = {} as Client;
  
  msgTrue = false;

  constructor(private myService: ClientService) { }

  ngOnInit(): void {
    this.myService.getClient().subscribe(c => this.client = c);
    this.myService.getClient().subscribe(res => console.log(res));
  }

  updateClient(clientId: any, form: any) {
    const newFormData = { 
      id: clientId, 
      name: form.value.name, 
      lastname: form.value.lastname, 
      address: form.value.address, 
      phone: form.value.phone, 
      email: form.value.email, 
      company: form.value.company
    };
  
      this.myService.updateClient(clientId, newFormData).subscribe(data => {
      this.msgTrue = true;
    });
  }

}

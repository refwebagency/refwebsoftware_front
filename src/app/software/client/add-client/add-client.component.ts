import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  msgTrue = false;
  clientList: any;

  clients: Client[] = []
  constructor(private myService: ClientService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  addClient(form: any) {
    const newFormData = { id: form.value.id, 
      name: form.value.name, 
      lastname: form.value.lastname, 
      address: form.value.address, 
      phone: form.value.phone, 
      email: form.value.email, 
      company: form.value.company };

    this.myService.addClient(newFormData).subscribe(data => {
      console.log(data);
      this.msgTrue = true;
    });
  }

}

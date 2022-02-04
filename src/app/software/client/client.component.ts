import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { SoftwareService } from '../software.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: Client[] = []

  constructor(

    private myService : SoftwareService
  ) { }

  ngOnInit(): void {

    this.myService.getClients().subscribe(c => this.clients = c);

  }

}

import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = []
  client: Client = {} as Client
  searchTerm!: string;

  constructor(

    private myService : ClientService
  ) { }

  ngOnInit(): void {

    this.myService.getClients().subscribe(c => this.clients = c);

  }

}

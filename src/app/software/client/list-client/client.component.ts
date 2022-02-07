import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: Client[] = []
  client: Client = {} as Client
  searchClient!: string
  
  constructor(
    private myService: ClientService, private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.myService.getClients().subscribe(c => this.clients = c);
  }

}

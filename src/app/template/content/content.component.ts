import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/software/models/user';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  users: User[] = []
  constructor() { }

  ngOnInit(): void {
  }

}

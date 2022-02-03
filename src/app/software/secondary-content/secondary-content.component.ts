import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { SoftwareService } from '../software.service';

@Component({
  selector: 'app-secondary-content',
  templateUrl: './secondary-content.component.html',
  styleUrls: ['./secondary-content.component.scss']
})
export class SecondaryContentComponent implements OnInit {

  //represente ma liste de Users
  users: User[] = []

  constructor(
    private myService: SoftwareService
  ) { }

  ngOnInit(): void {
  }

  getUserById(id: number)
  {
    this.myService.getUser(id).subscribe(res => console.log(res));
  }

}

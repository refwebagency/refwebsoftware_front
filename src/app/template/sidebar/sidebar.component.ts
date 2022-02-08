import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'User',
      expanded: true,
      children: [
        {
          title: 'Show users',
          link: 'user'
        },
        {
          title: 'Create user'
        },
      ],
    },
    {
      title: 'Client',
      expanded: true,
      children: [
        {
          title: 'Show clients',
          link: 'client'
        },
        {
          title: 'Create client',
        }
      ]
    },
    {
      title: 'Specialization',
      expanded: true,
      children: [
        {
          title: 'Show specializations',
          link: 'specialization'
        },
        {
          title: 'Create specialization'
        }
      ]
    },
    {
      title: 'Todo',
      expanded: true,
      children: [
        {
          title: 'Show todos',
          link: 'todo'
        }
      ]
    }
  ];

  constructor(menu: NbMenuService, private router: Router) { 
    menu.onItemClick().subscribe((event) => {
      console.log(event);
      if (event.item.title === 'Create user') {
        this.router.navigate(['user/writing']);
      }
      if (event.item.title === 'Create client') {
        this.router.navigate(['client/writing']);
      }
      if (event.item.title === 'Create specialization') {
        this.router.navigate(['specialization/writing']);
      }
    }); 
  }

  ngOnInit(): void {
      
  }

}
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar-dev',
  templateUrl: './sidebar-dev.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sidebar-dev.component.scss']
})
export class SidebarDevComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Planning',
      expanded: false,
      children: [
        {
          title: 'Voir les tâches',
          link: 'planning'
        },
      ],
    },
    {
      title: 'Déconnexion',
      expanded: false,
    }    
  ];
  
  constructor(menu: NbMenuService, public router: Router) { 
    menu.onItemClick().subscribe((event) => {
      console.log(event);
      if (event.item.title === 'Voir les tâches') {
        this.router.navigate(['planning/todo']);
      }   
    }); 
    
  }

  ngOnInit(): void {
  }

}

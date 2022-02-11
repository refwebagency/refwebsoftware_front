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
          title: 'Voir les tâches'
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
      var route = this.router.url;
      var id = route.match(/\d+/g);
      if (event.item.title === 'Voir les tâches') {
        console.log(id)
        this.router.navigate(['planning', id![0],'todo']);
      }   
    }); 
    
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Utilisateur',
      expanded: false,
      children: [
        {
          title: 'Voir les utilisateurs',
          link: 'user'
        },
        {
          title: 'Créer un utilisateur'
        },
      ],
    },
    {
      title: 'Client',
      expanded: false,
      children: [
        {
          title: 'Voir les clients',
          link: 'client'
        },
        {
          title: 'Créer un client',
        }
      ]
    },
    {
      title: 'Spécialisation',
      expanded: false,
      children: [
        {
          title: 'Voir les spécialisations',
          link: 'specialization'
        },
        {
          title: 'Créer une spécialisation'
        }
      ]
    },
    {
      title: 'Type de projet',
      expanded: false,
      children: [
        {
          title: 'Voir les types de projet',
          link: 'projecttype'
        },
        {
          title: 'Créer un type de projet'
        }
      ]
    },
    {
      title: 'Modèle de tâche',
      expanded: false,
      children: [
        {
          title: 'Voir les modèles de tâche',
          link: 'todotemplate'
        },
        {
          title: 'Créer un modèle de tâche'
        }
      ]
    },
    {
      title: 'Devis',
      expanded: false,
      children: [
        {
          title: 'Voir les devis',
          link: 'quotepdf'
        },
        {
          title: 'Créer un devis'
        }
      ]
    },
    {
      title: 'Tâche',
      expanded: false,
      children: [
        {
          title: 'Voir les tâches',
          link: 'todo'
        }
      ]
    }
  ];

  

  constructor(menu: NbMenuService, public router: Router) { 
    menu.onItemClick().subscribe((event) => {
      console.log(event);
      if (event.item.title === 'Créer un utilisateur') {
        this.router.navigate(['user/writing']);
      }
      if (event.item.title === 'Créer un client') {
        this.router.navigate(['client/writing']);
      }
      if (event.item.title === 'Créer une spécialisation') {
        this.router.navigate(['specialization/writing']);
      }
      if (event.item.title === 'Créer un type de projet') {
        this.router.navigate(['projecttype/writing']);
      }
      if (event.item.title === 'Créer un modèle de tâche') {
        this.router.navigate(['todotemplate/writing']);
      }
      if (event.item.title === 'Créer un devis') {
        this.router.navigate(['quotepdf/writing']);
      }   
    }); 
    
  }

  ngOnInit(): void {
  }

}

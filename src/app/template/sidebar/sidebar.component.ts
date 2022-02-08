import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'créer un user',
          link: '',
          
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Shopping Bag',
    },
    {
      title: 'Orders',
    },
  ];

  constructor(

    menu: NbMenuService,
    private router: Router
  ) {

    menu.onItemClick().subscribe((event) => {
      console.log(event);
      if (event.item.title === 'créer un user') {
        console.log('test')
        this.router.navigate([ { outlets: { primary:'user', userwriting:'writing', userdetail:null, userupdate: null  } }]);
        // item.click();
      }
    }); 

}


  ngOnInit(): void {

    

  
  }




}

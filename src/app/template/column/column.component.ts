import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, Router, Event, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  detailClient: boolean = false;
  updateClient: boolean = false;

  detailUser: boolean = false;
  updateUser: boolean = false;

  detailSpecialization: boolean = false;
  updateSpecialization: boolean = false;

  detailTodo: boolean = false;
  updateTodo: boolean = false;

  detailTodotemplate: boolean = false;
  updateTodotemplate: boolean = false;

  detailProjecttype: boolean = false;
  updateProjecttype: boolean = false;

  detailQuotepdf: boolean = false;

  detailPlanning: boolean = false;

  listPlanning: boolean = false;

  constructor(public router: Router)
  { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        var route = this.router.url;
        var id = route.match(/\d+/g);
        const currentRoute = this.router.url;

        // user components
        if(currentRoute == "/user/"+id)
        { 
          this.detailUser = true;
        }
        else
        {
          this.detailUser = false;
        }

        if(currentRoute == "/user/update/"+id)
        { 
          this.updateUser = true;
        }
        else
        {
          this.updateUser = false;
        }

        // client components
        if(currentRoute == "/client/"+id)
        { 
          this.detailClient = true;
        }
        else
        { 
          this.detailClient = false;
        }

        if(currentRoute == "/client/update/"+id)
        { 
          this.updateClient = true;
        }
        else
        {
          this.updateClient = false;
        }

        // Specialization components
        if(currentRoute == "/specialization/"+id)
        { 
          this.detailSpecialization = true;
        }
        else
        { 
          this.detailSpecialization = false;
        }

        if(currentRoute == "/specialization/update/"+id)
        { 
          this.updateSpecialization = true;
        }
        else
        {
          this.updateSpecialization = false;
        }

        // todo components
        if(currentRoute == "/todo/"+id)
        { 
          this.detailTodo = true;
        }
        else
        {
          this.detailTodo = false;
        }

        if(currentRoute == "/todo/update/"+id)
        { 
          this.updateTodo = true;
        }
        else
        {
          this.updateTodo = false;
        }

        // todotemplate components
        if(currentRoute == "/todotemplate/"+id)
        { 
          this.detailTodotemplate = true;
        }
        else
        {
          this.detailTodotemplate = false;
        }

        if(currentRoute == "/todotemplate/update/"+id)
        { 
          this.updateTodotemplate = true;
        }
        else
        {
          this.updateTodotemplate = false;
        }

        // projecttype components
        if(currentRoute == "/projecttype/"+id)
        { 
          this.detailProjecttype = true;
        }
        else
        {
          this.detailProjecttype = false;
        }

        if(currentRoute == "/projecttype/update/"+id)
        { 
          this.updateProjecttype = true;
        }
        else
        {
          this.updateProjecttype = false;
        }

        // quotePdf components
        if(currentRoute == "/quotepdf/"+id)
        { 
          this.detailQuotepdf = true;
        }
        else
        {
          this.detailQuotepdf = false;
        }

        // planning components
        
        if(currentRoute == "/planning/" + id![0] +"/todo")
        { 
          this.listPlanning = true;
        }
        else
        {
          this.listPlanning = false;
        }
        
        
        if(currentRoute == "/planning/" + id![0] +"/todo/"+id![1])
        { 
          this.detailPlanning = true;
        }
        else
        {
          this.detailPlanning = false ;
        }
      
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    }})
    }
  
  ngOnInit(): void {
  }

}


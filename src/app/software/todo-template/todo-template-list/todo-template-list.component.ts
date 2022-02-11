import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoTemplate } from '../../models/todoTemplate';
import { TodoTemplateService } from '../todo-template.service';

@Component({
  selector: 'app-todo-template-list',
  templateUrl: './todo-template-list.component.html',
  styleUrls: ['./todo-template-list.component.scss']
})
export class TodoTemplateListComponent implements OnInit {

  //todoTemplate represente ma liste de template de taches
  todoTemplates: TodoTemplate[] = []
  searchTerm!: string

  constructor(private myService : TodoTemplateService) 
  {
    this.myService.todoTemplateChange.subscribe(() => {
      this.myService.getTodoTemplates().subscribe(c => this.todoTemplates = c);
      console.log("getTodoTemplate() pour sidebar2 déclenché")
    })
  }

  ngOnInit(): void {
  }

}
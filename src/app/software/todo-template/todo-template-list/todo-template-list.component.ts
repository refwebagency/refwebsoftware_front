import { Component, OnInit } from '@angular/core';
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

  constructor(

    private myService : TodoTemplateService

  ) { }

  //recupere tous les todoTemplate à l'initialisation du component
  ngOnInit(): void {

    this.myService.getTodoTemplates().subscribe(t => this.todoTemplates = t)

  }

}

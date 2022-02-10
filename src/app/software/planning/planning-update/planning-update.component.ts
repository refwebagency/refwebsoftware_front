import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { Todo } from '../../models/todo';
import { TodoService } from '../../todo/todo.service';

@Component({
  selector: 'app-planning-update',
  templateUrl: './planning-update.component.html',
  styleUrls: ['./planning-update.component.scss']
})
export class PlanningUpdateComponent implements OnInit {

  //todo represente mon objet Todo
  todo: Todo = {} as Todo

  //specializations represente une liste de Specialisations
  specializations: Specialization[] = []
  specialization: Specialization = {} as Specialization

  msgTrue = false;

  constructor(

    private myService: TodoService,
    private route: Router
  ) { }

  ngOnInit(): void {
    // var id = this.route.snapshot.url[1].path;
    this.myService.getTodo().subscribe((u => this.todo = u));
    this.myService.getSpecializations().subscribe(s => this.specializations = s);
  }

  updateTodoById(todoId: any, form: any)
  {
    const newForm = {
      id: todoId,
      status: form.value.status
    };

    this.myService.updateTodo(todoId, newForm).subscribe(data => {
      this.msgTrue = true;
    })
    this.route.navigateByUrl("/planning/todo");
  }

}
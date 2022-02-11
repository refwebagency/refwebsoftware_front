import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialization } from '../../models/specialization';
import { Todo } from '../../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.scss']
})
export class TodoUpdateComponent implements OnInit {

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
      name: form.value.name,
      experience: form.value.experience,
      specializationId: form.value.specialization,
      description: form.value.description,
      projectId: form.value.projectId,
      time: form.value.time,
      userId: form.value.userId,
      status: form.value.status
    };

    this.myService.updateTodo(todoId, newForm).subscribe(data => {
      this.msgTrue = true;
    })
    setTimeout(() => this.myService.eventTodo(todoId), 1000);
    this.route.navigateByUrl("/todo");
  }
}


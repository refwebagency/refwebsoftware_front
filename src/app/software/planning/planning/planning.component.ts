import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { PlanningService } from '../planning.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  // todos: Todo[] = []

  constructor(private myService: PlanningService) { }

  ngOnInit(): void {
    // this.myService.getTodos().subscribe(u => this.todos = u);
  }

}

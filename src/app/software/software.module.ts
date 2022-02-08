import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoUpdateComponent } from './todo/todo-update/todo-update.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';

// pour  chaque component ou module, j'importe


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SoftwareModule { }
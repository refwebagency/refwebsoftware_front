import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoUpdateComponent } from './todo/todo-update/todo-update.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserWritingComponent } from './user/user-writing/user-writing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbActionsModule, NbButtonModule, NbLayoutModule, NbOptionComponent } from '@nebular/theme';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { UserListFilterPipe } from './user/user-list/user-filter';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { ProjectTypeListComponent } from './project-type/project-type-list/project-type-list.component';
import { ProjectTypeDetailComponent } from './project-type/project-type-detail/project-type-detail.component';
import { ProjectTypeWritingComponent } from './project-type/project-type-writing/project-type-writing.component';
import { ProjectTypeUpdateComponent } from './project-type/project-type-update/project-type-update.component';
import { ProjectTypeListFilterPipe } from './project-type/project-type-list/project-type-list';
import { TodoTemplateListComponent } from './todo-template/todo-template-list/todo-template-list.component';
import { TodoTemplateWritingComponent } from './todo-template/todo-template-writing/todo-template-writing.component';
import { TodoTemplateDetailComponent } from './todo-template/todo-template-detail/todo-template-detail.component';
import { TodoTemplateUpdateComponent } from './todo-template/todo-template-update/todo-template-update.component';
import { TodoTemplateListFilterPipe } from './todo-template/todo-template-list/todo-template-filter';
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
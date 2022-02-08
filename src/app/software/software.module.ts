import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientListComponent } from './client/client-list/client-list.component';
import { RouterModule } from '@angular/router';
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
import { TodoTemplateComponent } from './todo-template/todo-template.component';
import { ProjectTypeListComponent } from './project-type/project-type-list/project-type-list.component';
import { ProjectTypeDetailComponent } from './project-type/project-type-detail/project-type-detail.component';
import { ProjectTypeWritingComponent } from './project-type/project-type-writing/project-type-writing.component';
import { ProjectTypeUpdateComponent } from './project-type/project-type-update/project-type-update.component';
import { ProjectTypeListFilterPipe } from './project-type/project-type-list/project-type-list';
// pour  chaque component ou module, j'importe


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserWritingComponent,
    UserListFilterPipe,
    ClientListComponent,
    UserUpdateComponent,
    TodoTemplateComponent,
    ProjectTypeListComponent,
    ProjectTypeDetailComponent,
    ProjectTypeWritingComponent,
    ProjectTypeUpdateComponent,
    ProjectTypeListFilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NbButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class SoftwareModule { }

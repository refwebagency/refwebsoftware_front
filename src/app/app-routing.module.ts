import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './software/client/client-list/client-list.component';
import { UserListComponent } from './software/user/user-list/user-list.component';
import { UserDetailComponent } from './software/user/user-detail/user-detail.component';
import { UserWritingComponent } from './software/user/user-writing/user-writing.component';
import { UserUpdateComponent } from './software/user/user-update/user-update.component';
import { ProjectTypeListComponent } from './software/project-type/project-type-list/project-type-list.component';
import { ProjectTypeWritingComponent } from './software/project-type/project-type-writing/project-type-writing.component';
import { ProjectTypeDetailComponent } from './software/project-type/project-type-detail/project-type-detail.component';
import { ProjectTypeUpdateComponent } from './software/project-type/project-type-update/project-type-update.component';
import { TodoTemplateListComponent } from './software/todo-template/todo-template-list/todo-template-list.component';
import { TodoTemplateWritingComponent } from './software/todo-template/todo-template-writing/todo-template-writing.component';
import { TodoTemplateDetailComponent } from './software/todo-template/todo-template-detail/todo-template-detail.component';
import { ClientDetailComponent } from './software/client/client-detail/client-detail.component';
import { ClientUpdateComponent } from './software/client/client-update/client-update.component';
import { ClientWritingComponent } from './software/client/client-writing/client-writing.component';
import { SpecializationListComponent } from './software/specialization/specialization-list/specialization-list.component';
import { SpecializationDetailComponent } from './software/specialization/specialization-detail/specialization-detail.component';
import { SpecializationUpdateComponent } from './software/specialization/specialization-update/specialization-update.component';
import { SpecializationWritingComponent } from './software/specialization/specialization-writing/specialization-writing.component';
import { LoginComponent } from './software/login/login/login.component';
import { TodoUpdateComponent } from './software/todo/todo-update/todo-update.component';
import { TodoListComponent } from './software/todo/todo-list/todo-list.component';
import { TodoDetailComponent } from './software/todo/todo-detail/todo-detail.component';

const routes: Routes = [
  //vue pour user
  {path: 'user', component: UserListComponent},
  {path: 'user/:id', component: UserDetailComponent, outlet: 'userdetail'},
  {path: 'update/:id', component: UserUpdateComponent, outlet: 'userupdate'},
  {path: 'writing', component: UserWritingComponent, outlet: 'userwriting'},

  //vue pour projectType
  {path: 'projecttype', component: ProjectTypeListComponent},
  {path: 'projecttype/:id', component: ProjectTypeDetailComponent, outlet: 'projecttypedetail'},
  {path: 'projecttypeupdate/:id', component: ProjectTypeUpdateComponent, outlet: 'projecttypeupdate'},
  {path: 'writingprojecttype', component: ProjectTypeWritingComponent, outlet: 'projecttypewriting'},

  //vue pour todoTemplate
  {path: 'todotemplate', component: TodoTemplateListComponent},
  {path: 'todotemplate/:id', component: TodoTemplateDetailComponent, outlet: 'todotemplatedetail'},
  {path: 'writingtodotemplate', component: TodoTemplateWritingComponent, outlet: 'todotemplatewriting'},
  
  //vue pour client
  {path: 'login', component: LoginComponent},

  {path: 'user', component: UserListComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: 'user/update/:id', component: UserUpdateComponent},
  {path: 'user/writing', component: UserWritingComponent},

  {path: 'client', component: ClientListComponent},
  {path: 'client/:id', component: ClientDetailComponent},
  {path: 'client/update/:id', component: ClientUpdateComponent},
  {path: 'client/writing', component: ClientWritingComponent},

  {path: 'specialization', component: SpecializationListComponent},
  {path: 'specialization/:id', component: SpecializationDetailComponent},
  {path: 'specialization/update/:id', component: SpecializationUpdateComponent},
  {path: 'specialization/writing', component: SpecializationWritingComponent},

  {path: 'todo', component: TodoListComponent},
  {path: 'todo/:id', component: TodoDetailComponent},
  {path: 'todo/update/:id', component: TodoUpdateComponent},

  {path: '', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
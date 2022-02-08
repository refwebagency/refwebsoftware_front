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
  
  //vue pour client
  {path: 'client', component: ClientListComponent},
  {path: '', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

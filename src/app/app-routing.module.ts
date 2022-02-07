import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './software/client/client-list/client-list.component';
import { UserListComponent } from './software/user/user-list/user-list.component';
import { UserDetailComponent } from './software/user/user-detail/user-detail.component';
import { UserWritingComponent } from './software/user/user-writing/user-writing.component';
import { UserUpdateComponent } from './software/user/user-update/user-update.component';

const routes: Routes = [
  {path: 'user', component: UserListComponent},
  {path: 'user/:id', component: UserDetailComponent, outlet: 'userdetail'},
  {path: 'update/:id', component: UserUpdateComponent, outlet: 'userupdate'},
  {path: 'writing', component: UserWritingComponent, outlet: 'userwriting'},
  {path: 'client', component: ClientListComponent},
  {path: '', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

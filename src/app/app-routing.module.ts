import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './software/client/client.component';
import { UserComponent } from './software/user/user.component';
import { UserDetailComponent } from './software/user-detail/user-detail.component';
import { UserWritingComponent } from './software/user-writing/user-writing.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserDetailComponent, outlet: 'userdetail'},
  {path: 'writing', component: UserWritingComponent, outlet: 'userwriting'},
  {path: 'client', component: ClientComponent},
  {path: '', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './software/client/add-client/add-client.component';
import { ClientComponent } from './software/client/list-client/client.component';
import { DetailClientComponent } from './software/client/detail-client/detail-client.component';
import { UpdateClientComponent } from './software/client/update-client/update-client.component';
import { DetailUserComponent } from './software/user/detail-user/detail-user.component';
import { UpdateUserComponent } from './software/user/update-user/update-user.component';
import { UserComponent } from './software/user/list-user/user.component';
import { ContentComponent } from './template/content/content.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'user/:id', component: DetailUserComponent},
  { path: 'user/addUser', component: AddClientComponent},
  { path: 'user/updateUser/:id', component: UpdateUserComponent},
  { path: 'client', component: ClientComponent},
  { path: 'client/:id', component: DetailClientComponent},
  { path: 'client/addClient', component: AddClientComponent},
  { path: 'client/updateClient/:id', component: UpdateClientComponent},
  // { path: '', redirectTo:'/user', pathMatch: 'full'},
  { path: '', component: ContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

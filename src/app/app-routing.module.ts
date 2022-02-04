import { NgModule } from '@angular/core';
import { PrincipalContentComponent } from './software/principal-content/principal-content.component';
import { Routes, RouterModule } from '@angular/router';
import { SecondaryContentComponent } from './software/secondary-content/secondary-content.component';
import { ClientComponent } from './software/client/client.component';

const routes: Routes = [
  {path: 'user', component: PrincipalContentComponent},
  {path: 'client', component: ClientComponent},
  {path: 'user/:id', component: SecondaryContentComponent, outlet: 'test'},
  {path: '', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

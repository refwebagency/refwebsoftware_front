import { NgModule } from '@angular/core';
import { PrincipalContentComponent } from './software/principal-content/principal-content.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'user', component: PrincipalContentComponent},
  {path: '', redirectTo:'/user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

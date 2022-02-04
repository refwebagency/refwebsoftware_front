import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalContentComponent } from './principal-content/principal-content.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondaryContentComponent } from './secondary-content/secondary-content.component';
import { ClientComponent } from './client/client.component';
import { RouterModule } from '@angular/router';
// pour  chaque component ou module, j'importe


@NgModule({
  declarations: [
    PrincipalContentComponent,
    SecondaryContentComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SoftwareModule { }

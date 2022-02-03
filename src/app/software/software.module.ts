import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalContentComponent } from './principal-content/principal-content.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondaryContentComponent } from './secondary-content/secondary-content.component';
// pour  chaque component ou module, j'importe


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SoftwareModule { }

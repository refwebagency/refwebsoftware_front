import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareModule } from '../software/software.module';
import { RouterModule } from '@angular/router';
import { NbMenuModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SoftwareModule,
    RouterModule,
    NbMenuModule
  ]
})
export class TemplateModule { }
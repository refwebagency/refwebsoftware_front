import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SoftwareModule } from '../software/software.module';
import { RouterModule } from '@angular/router';
import { ColumnComponent } from './column/column.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    SidebarComponent,
    ColumnComponent
  
  ],
  imports: [
    CommonModule,
    SoftwareModule,
    RouterModule
  ]
})
export class TemplateModule { }

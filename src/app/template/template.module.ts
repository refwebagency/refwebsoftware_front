import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SoftwareModule } from '../software/software.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientComponent } from '../software/client/list-client/client.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    SidebarComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    SoftwareModule,
    RouterModule
  ]
})
export class TemplateModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SoftwareModule } from '../software/software.module';
import { PrincipalContentComponent } from '../software/principal-content/principal-content.component';
import { SecondaryContentComponent } from '../software/secondary-content/secondary-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    SidebarComponent
  
  ],
  imports: [
    CommonModule,
    SoftwareModule
  ]
})
export class TemplateModule { }

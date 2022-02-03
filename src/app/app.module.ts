import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { SoftwareModule } from './software/software.module';
import { ContentComponent } from './template/content/content.component';
import { FooterComponent } from './template/footer/footer.component';
import { TemplateModule } from './template/template.module';
import { PrincipalContentComponent } from './software/principal-content/principal-content.component';
import { SecondaryContentComponent } from './software/secondary-content/secondary-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    PrincipalContentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    SoftwareModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

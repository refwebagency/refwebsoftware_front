import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { SoftwareModule } from './software/software.module';
import { ContentComponent } from './template/content/content.component';
import { FooterComponent } from './template/footer/footer.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { ColumnComponent } from './template/column/column.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SidebarComponent,
    ColumnComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    SoftwareModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

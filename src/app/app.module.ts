import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbIconModule, NbInputModule, NbTreeGridModule, NbActionsModule, NbMenuModule, NbMenuService } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './template/content/content.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { ColumnComponent } from './template/column/column.component';
import { TemplateModule } from './template/template.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SidebarComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbIconModule, 
    NbInputModule, 
    NbTreeGridModule,
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

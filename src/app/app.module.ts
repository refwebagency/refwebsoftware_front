import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { ContentComponent } from './template/content/content.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SoftwareModule } from './software/software.module';
import { UserComponent } from './software/user/list-user/user.component';
import { ClientComponent } from './software/client/list-client/client.component';
import { DetailClientComponent } from './software/client/detail-client/detail-client.component';
import { DetailUserComponent } from './software/user/detail-user/detail-user.component';
import { AddClientComponent } from './software/client/add-client/add-client.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './software/user/add-user/add-user.component';
import { UpdateUserComponent } from './software/user/update-user/update-user.component';
import { UpdateClientComponent } from './software/client/update-client/update-client.component';
import { UserSearch } from './software/user/list-user/user-search';
import { ClientSearch } from './software/client/list-client/client-search';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    UserComponent,
    ClientComponent,
    DetailClientComponent,
    DetailUserComponent,
    AddClientComponent,
    AddUserComponent,
    UpdateClientComponent,
    UpdateUserComponent,
    UserSearch,
    ClientSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SoftwareModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

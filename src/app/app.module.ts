import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbActionsModule, NbMenuModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './template/content/content.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { ColumnComponent } from './template/column/column.component';
import { TemplateModule } from './template/template.module';
import { UserListComponent } from './software/user/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserUpdateComponent } from './software/user/user-update/user-update.component';
import { ClientDetailComponent } from './software/client/client-detail/client-detail.component';
import { ClientWritingComponent } from './software/client/client-writing/client-writing.component';
import { ClientListFilterPipe } from './software/client/client-list/client-filter';
import { ClientUpdateComponent } from './software/client/client-update/client-update.component';
import { ClientListComponent } from './software/client/client-list/client-list.component';
import { UserListFilterPipe } from './software/user/user-list/user-filter';
import { UserWritingComponent } from './software/user/user-writing/user-writing.component';
import { UserDetailComponent } from './software/user/user-detail/user-detail.component';
import { SpecializationWritingComponent } from './software/specialization/specialization-writing/specialization-writing.component';
import { SpecializationListComponent } from './software/specialization/specialization-list/specialization-list.component';
import { SpecializationUpdateComponent } from './software/specialization/specialization-update/specialization-update.component';
import { SpecializationDetailComponent } from './software/specialization/specialization-detail/specialization-detail.component';
import { LoginComponent } from './software/login/login/login.component';
import { TodoUpdateComponent } from './software/todo/todo-update/todo-update.component';
import { TodoListComponent } from './software/todo/todo-list/todo-list.component';
import { TodoDetailComponent } from './software/todo/todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SidebarComponent,
    ColumnComponent,
    UserListComponent,
    UserDetailComponent,
    UserWritingComponent,
    UserListFilterPipe,
    UserUpdateComponent,
    ClientListComponent,
    ClientDetailComponent,
    ClientWritingComponent,
    ClientListFilterPipe,
    ClientUpdateComponent,
    SpecializationDetailComponent,
    SpecializationUpdateComponent,
    SpecializationListComponent,
    SpecializationWritingComponent,
    LoginComponent,
    TodoListComponent,
    TodoUpdateComponent,
    TodoDetailComponent
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
    NbEvaIconsModule,
    AppRoutingModule,
    NbCardModule,
    NbIconModule, 
    NbInputModule, 
    NbTreeGridModule,
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
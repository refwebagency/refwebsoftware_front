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
import { ProjectTypeListComponent } from './software/project-type/project-type-list/project-type-list.component';
import { ProjectTypeDetailComponent } from './software/project-type/project-type-detail/project-type-detail.component';
import { ProjectTypeWritingComponent } from './software/project-type/project-type-writing/project-type-writing.component';
import { ProjectTypeUpdateComponent } from './software/project-type/project-type-update/project-type-update.component';
import { ProjectTypeListFilterPipe } from './software/project-type/project-type-list/project-type-list';
import { TodoTemplateWritingComponent } from './software/todo-template/todo-template-writing/todo-template-writing.component';
import { TodoTemplateListComponent } from './software/todo-template/todo-template-list/todo-template-list.component';
import { TodoTemplateListFilterPipe } from './software/todo-template/todo-template-list/todo-template-filter';
import { TodoTemplateDetailComponent } from './software/todo-template/todo-template-detail/todo-template-detail.component';
import { TodoTemplateUpdateComponent } from './software/todo-template/todo-template-update/todo-template-update.component';
import { QuotePdfListComponent } from './software/quote-pdf/quote-pdf-list/quote-pdf-list.component';
import { QuotePdfWritingComponent } from './software/quote-pdf/quote-pdf-writing/quote-pdf-writing.component';
import { QuotePdfDetailComponent } from './software/quote-pdf/quote-pdf-detail/quote-pdf-detail.component';
import { QuotePdfUpdateComponent } from './software/quote-pdf/quote-pdf-update/quote-pdf-update.component';
import { QuotePdfListFilterPipe } from './software/quote-pdf/quote-pdf-list/quote-pdf-filter';

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
    TodoDetailComponent,
    UserListComponent,
    UserDetailComponent,
    UserWritingComponent,
    UserListFilterPipe,
    ClientListComponent,
    UserUpdateComponent,
    ProjectTypeListComponent,
    ProjectTypeDetailComponent,
    ProjectTypeWritingComponent,
    ProjectTypeUpdateComponent,
    ProjectTypeListFilterPipe,
    TodoTemplateListComponent,
    TodoTemplateListFilterPipe,
    TodoTemplateWritingComponent,
    TodoTemplateDetailComponent,
    TodoTemplateUpdateComponent,
    QuotePdfListComponent,
    QuotePdfWritingComponent,
    QuotePdfDetailComponent,
    QuotePdfUpdateComponent,
    QuotePdfListFilterPipe
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
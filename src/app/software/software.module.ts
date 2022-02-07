import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientListComponent } from './client/client-list/client-list.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserWritingComponent } from './user/user-writing/user-writing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbActionsModule, NbButtonModule, NbLayoutModule, NbOptionComponent } from '@nebular/theme';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { UserListFilterPipe } from './user/user-list/user-filter';
import { UserUpdateComponent } from './user/user-update/user-update.component';
// pour  chaque component ou module, j'importe


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserWritingComponent,
    UserListFilterPipe,
    ClientListComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NbButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class SoftwareModule { }

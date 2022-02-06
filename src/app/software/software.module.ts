import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './client/client.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserWritingComponent } from './user-writing/user-writing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbActionsModule, NbButtonModule, NbLayoutModule, NbOptionComponent } from '@nebular/theme';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { UserFilterPipe } from './user/user-filter';
// pour  chaque component ou module, j'importe


@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserWritingComponent,
    ClientComponent,
    UserFilterPipe
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

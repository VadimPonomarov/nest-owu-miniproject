import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {ApiAuthService} from '../../services';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
  ],
  providers: [ApiAuthService],
  exports: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class AuthModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { OperationShellComponent } from '../../components/operation-shell/operation-shell.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileLoginComponent } from '../../components/profile-login/profile-login.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    OperationShellComponent,
    ProfileLoginComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    SharedModule,
  ]
})
export class OperationModule { }

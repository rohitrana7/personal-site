import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { OperationShellComponent } from '../../components/operation-shell/operation-shell.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    OperationShellComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    SharedModule,
  ]
})
export class OperationModule { }

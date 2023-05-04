import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { OperationShellComponent } from '../../components/operation-shell/operation-shell.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileLoginComponent } from '../../components/profile-login/profile-login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from 'src/app/interceptors/request.interceptor';
import { AuthService } from 'src/app/auth/auth.service';


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
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ]
})
export class OperationModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLoginDetails, IUserLoginResponse, IUserRegisterDetails, IUserRegisterResponse } from '../models/user.model';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn() : boolean {
    return !!localStorage.getItem('access-token');
  }

  loginUser(data?: IUserLoginDetails): Observable<IUserLoginResponse> {
    return this.http.get<IUserLoginResponse>(`${baseUrl}/login`);
  }

  createUser(data: IUserRegisterDetails): Observable<IUserRegisterResponse> {
    return this.http.post<IUserRegisterResponse>(`${baseUrl}/user/register`, data);
  }
}

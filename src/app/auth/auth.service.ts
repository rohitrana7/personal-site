import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLoginDetails, IUserLoginResponse, IUserRegisterDetails, IUserRegisterResponse } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) { }

  isLoggedIn() : boolean {
    return !!localStorage.getItem('access-token');
  }

  loginUser(data?: IUserLoginDetails): Observable<IUserLoginResponse> {
    return this.http.get<IUserLoginResponse>(`${this.baseUrl}/login`);
  }

  createUser(data: IUserRegisterDetails): Observable<IUserRegisterResponse> {
    return this.http.post<IUserRegisterResponse>(`${this.baseUrl}/user/register`, data);
  }
}

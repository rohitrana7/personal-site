import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate() {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    alert("Invalid Credentials");
    this.router.navigate(['/auth/login']);
    return false;
  }

}

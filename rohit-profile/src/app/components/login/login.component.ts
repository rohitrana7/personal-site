import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private router : Router,
    private auth: AuthService) {
    this.initForm();
  }

  login() {
    if(this.loginForm.valid) {
      this.auth.loginUser(this.loginForm.getRawValue()).subscribe( data => {
        if (data.success && data.statusCode === 200) {
          localStorage.setItem('access-token', data.token);
          this.router.navigate(['auth/profile-login']);
        } else {
          alert('Invalid Credentials');
        }
      })
    }

  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

}

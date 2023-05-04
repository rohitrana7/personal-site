import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private router : Router) {
    this.initForm();
  }

  login() {
    if(this.loginForm.valid){
      console.log(this.loginForm);
      this.router.navigate(['auth/profile-login']);
    }

  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

}

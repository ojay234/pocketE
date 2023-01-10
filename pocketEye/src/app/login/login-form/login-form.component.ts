import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  form_title = 'Login to your Account';
  public loginForm: FormGroup | any;
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  login(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.router.navigate(['optom']);
    }
  }
}

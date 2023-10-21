import { Component, OnInit } from '@angular/core';
import {AuthService} from "../user_core/_services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    role :[] ,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles: Set<string> = new Set<string>(["Student", "Teacher", "Owner", "University"]);
  r: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.form.role.push(this.r);
    const { username, email, role, password } = this.form;
    console.log(this.form);
    this.authService.register(username, email, role, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}

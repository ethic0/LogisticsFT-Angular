import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Login } from '../interfaces/login';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login ={email:"admin@markexpress.com", password:"Adityadenis45!"}
  message: string;
  returnUrl:string;
  public loginForm: FormGroup;
  public submitted = false;
  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private authService:AuthService
   ) { }
  
  ngOnInit():void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          )
        ]
      ]
    });
    this.returnUrl = '/dashboard';
    // this.authService.logout();
  }
  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    // console.log(this.loginForm.value);
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    else{
      if(this.formControl.email.value == this.model.email && this.formControl.password.value == this.model.password){
        console.log("Login success!");
        localStorage.setItem('isLoggedIn','true');
        localStorage.setItem('token',this.formControl.email.value);
        this.router.navigate([this.returnUrl]);
      }
      else{
        this.message = "Invalid Credentials!";
      }
    }
  }
}

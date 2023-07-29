import { Component, OnInit } from '@angular/core';
import { Userinfo } from 'src/app/models/userinfo.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errMsg = {};
  form!: FormGroup;
  serverError: string = '';
  userinfo!: Userinfo;
  
  constructor(private userService : UserService, private router : Router, private fb: FormBuilder) {
    
   } 
   ngOnInit() {
    this.form = this.fb.group(
      {
        emailId: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
        )]]
      }
    )
    this.userinfo = new Userinfo();
   }

  loginUser(userInfo: Userinfo) {
    if (this.form.valid) {
      this.userService.login(userInfo).subscribe(response => {
        if(response != null) {
          this.userService.setUserInfo(response);
          this.router.navigate(['user/dashboard']);
        } else {
            alert('Login Credentials are invalid.')
        } 
    },
    err => {
      alert('Please try again. Something went wrong while logging you in.')
    });
  } else {
    alert('Please fill in the valid details.')
  }
}


}


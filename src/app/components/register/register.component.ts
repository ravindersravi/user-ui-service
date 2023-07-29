import { Component, OnInit } from '@angular/core';
import { Userinfo } from 'src/app/models/userinfo.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errMsg = {};
  form!: FormGroup;
  serverError: string = '';
  userinfo!: Userinfo;
  
  constructor(private userService : UserService, private router : Router, private fb: FormBuilder) {
    
   } 
   ngOnInit() {
    this.form = this.fb.group(
      {
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        emailId: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
        )]],
        confirmPassword: ['', [Validators.required, Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
        )]],
        panNumber: ['', [Validators.required, Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]],
        bankAccountNumber: ['', [Validators.required, Validators.pattern('^[0-9]{8,18}$')]]
      }
    )
    this.userinfo = new Userinfo();
   }

  registerUser(userInfo: Userinfo) {
    if (!this.form.valid) {
      alert('Please fill in the valid details.')
    }
    else if(userInfo.password === userInfo.confirmPassword) {
      
      this.userService.register(userInfo).subscribe(response => {
        if(response) {
          userInfo.password = '';
          userInfo.confirmPassword = '';
          this.userService.setUserInfo(userInfo);
          this.router.navigate(['user/dashboard']);
        } else {
          alert('User already registered.')
        } 
    },
    err => {
      alert('Please try again. Something went wrong while registering you in.')
    });
  } else {
    alert('Passwords do not match.')

  }
}
  
}


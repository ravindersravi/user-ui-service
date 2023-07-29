import { Component, OnInit, Input } from '@angular/core';
import { Userinfo } from 'src/app/models/userinfo.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  form!: FormGroup;

  @Input() userinfo: Userinfo;
  @Input() isEditable: boolean;
  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) {
    this.userinfo = this.userService.getUserInfo();
    this.isEditable = false;
  }
  ngOnInit(): void {
    console.log("the user info is" + JSON.stringify(this.userinfo));
    this.form = this.fb.group(
      {
        firstName: [this.userinfo.firstName, Validators.required],
        lastName: [this.userinfo.lastName, Validators.required],
        emailId: [this.userinfo.emailId, [Validators.required, Validators.email]],
        panNumber: [this.userinfo.panNumber, [Validators.required, Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]],
        bankAccountNumber: [this.userinfo.bankAccountNumber, [Validators.required, Validators.pattern('^[0-9]{8,18}$')]]
      }
    )
    this.userinfo = new Userinfo();
  }

  edit(): void {
    this.isEditable = true;
  }

  cancel(): void {
    this.isEditable = false;
  }


  editUserInfo(editedInfo: Userinfo) {
    if (!this.form.valid) {
      alert('Please fill in the valid details.')
    } else {
      this.userService.updateUserDetails(editedInfo).subscribe(
        response => {
          this.userinfo = editedInfo;
          this.userService.setUserInfo(editedInfo);
          this.isEditable = false;
        },
        error => {
          alert('Please try again. Something went wrong while registering you in.');
        });
    }
  }



}

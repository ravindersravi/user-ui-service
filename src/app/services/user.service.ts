import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { Userinfo } from '../models/userinfo.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:9000/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userInfo: Userinfo;

  constructor(private http: HttpClient) { 
    this.userInfo = {};
  }

  register(user: Userinfo): Observable<any> {
    return this.http.post(`${baseUrl}/register`, user);
  }

  login(user: Userinfo): Observable<Userinfo> {
    return this.http.post(`${baseUrl}/login`, user);
  }

  updateUserDetails(user: Userinfo): Observable<Userinfo> {
    return this.http.patch(`${baseUrl}/update`, user);
  }

  setUserInfo(userInfo: Userinfo): void {
    this.userInfo = userInfo;
  }

  getUserInfo(): Userinfo {
    return this.userInfo;
  }
}

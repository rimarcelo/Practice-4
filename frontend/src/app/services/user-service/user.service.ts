import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api: ApiService;
  constructor(api: ApiService) { 
    this.api = api;
  }

  loggedIn(callback: any){
    this.api.serverCall("GET", "/api/isLoggedIn", null, (data: any)=>{
      callback(data);
    });
  }

  getLoggedInUser(callback: any ){
    this.api.serverCall("GET", "/api/loggedInUser", null, (data: any)=>{
      callback(data);
    });
  }

  logOut(callback: any){
    this.api.serverCall("GET", "/api/logout", null, (data: any)=>{
      callback(data);
    });
  }

  login(email: any, password: any, callback: any){
    this.api.serverCall("POST", "/api/login", {email: email, password: password}, (data: any)=>{
      callback(data)
    });
  }

  register(email: any, password: any, firstName: any, lastName: any, avatar: any, callback: any){
    this.api.serverCall("POST", "/api/register", {email: email, password: password, firstName: firstName, lastName: lastName, avatar: avatar}, (data: any)=>{
      callback(data);
    });
  }
}

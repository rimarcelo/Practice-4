import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: any = "";
  public password: any = "";
  public error: string = "";
  public userService: UserService;
  constructor(userServcie: UserService, public app: AppComponent) {
    this.userService = userServcie;
  }

  ngOnInit(): void {
  }

  fieldChange(){
    this.error = "";
  }

  login(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let that = this;
    if(this.username == "" || this.password == ""){
      this.error = "Both email and password are required to login";
    } else if (!re.test(this.username)){
      this.error = "Please input a valid email address";
    } else {
      this.userService.login(this.username, this.password, (data: any)=>{
        if(data.status != undefined && data.status == "success"){
          that.app.user = data.user;
          that.app.navigateToUrl("/home");
        } else {
          that.error = data.error;
        }
      });
    }
  }

}

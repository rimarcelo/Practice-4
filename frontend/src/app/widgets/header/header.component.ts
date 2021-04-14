import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public app: AppComponent, public userService: UserService) { }

  ngOnInit(): void {
  }

  logout(){
    let that = this;

    this.userService.logOut((data: any)=>{
      that.app.user = null;
      document.location.reload();
    });
  }
}

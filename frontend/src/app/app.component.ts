import { Component } from '@angular/core';
import { AppProvider } from './app.init.component';

import * as jquery from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ca-frontend';
  user: any = null;
  constructor(
    protected router: Router, 
    private appProvider: AppProvider
  ){
    this.user = appProvider.getUser();
  }

  ngOnInit(){
    if(this.user == null){
      this.navigateToUrl('/login');
    } else {
      this.navigateToUrl('/home');
    }
  }

  navigateToUrl(url: string){
    this.router.navigate([url]);  
  }
}

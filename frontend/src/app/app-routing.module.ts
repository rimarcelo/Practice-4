import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    {
		path : '',
		pathMatch : 'full',
		component : LoginComponent
	},
    {
		path : 'login',
		pathMatch : 'full',
		component : LoginComponent
	},
    {
		path : 'register',
		pathMatch : 'full',
		component : RegisterComponent
	},
	{
		path : 'home',
		pathMatch : 'full',
		component : HomePageComponent
	},
	{
		path : 'myAds',
		pathMatch : 'full',
		component : MyAdsComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

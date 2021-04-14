import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdvertsComponent } from './pages/adverts/adverts.component';
import { AdvertPageComponent } from './pages/advert-page/advert-page.component';
import { AppProvider } from './app.init.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './widgets/header/header.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';

export function userProvider(provider: AppProvider) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdvertsComponent,
    AdvertPageComponent,
    HomePageComponent,
    HeaderComponent,
    MyAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // { provide: APP_INITIALIZER, useFactory: userProvider, deps: [AppProvider], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

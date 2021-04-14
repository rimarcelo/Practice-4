import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppComponent} from "../../app.component";

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as $ from "jquery";
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let app: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [AppComponent],
      imports: [FormsModule, AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    $('.username').text("ehtisham");
  });
});

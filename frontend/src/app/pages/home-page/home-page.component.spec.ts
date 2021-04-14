import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertsComponent } from '../adverts/adverts.component';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [AdvertsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

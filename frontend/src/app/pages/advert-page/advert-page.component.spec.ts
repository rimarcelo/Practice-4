import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertPageComponent } from './advert-page.component';

describe('AdvertPageComponent', () => {
  let component: AdvertPageComponent;
  let fixture: ComponentFixture<AdvertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

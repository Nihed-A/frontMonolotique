import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMainPageComponent } from './alert-main-page.component';

describe('AlertMainPageComponent', () => {
  let component: AlertMainPageComponent;
  let fixture: ComponentFixture<AlertMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOffersBackComponent } from './update-offers-back.component';

describe('UpdateOffersBackComponent', () => {
  let component: UpdateOffersBackComponent;
  let fixture: ComponentFixture<UpdateOffersBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOffersBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOffersBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

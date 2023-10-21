import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOffersBackComponent } from './add-offers-back.component';

describe('AddOffersComponent', () => {
  let component: AddOffersBackComponent;
  let fixture: ComponentFixture<AddOffersBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOffersBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOffersBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

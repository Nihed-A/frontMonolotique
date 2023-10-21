import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimMainPageComponent } from './claim-main-page.component';

describe('ClaimMainPageComponent', () => {
  let component: ClaimMainPageComponent;
  let fixture: ComponentFixture<ClaimMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

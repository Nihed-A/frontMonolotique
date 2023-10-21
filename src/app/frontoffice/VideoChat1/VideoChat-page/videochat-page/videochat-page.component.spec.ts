import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideochatPageComponent } from './videochat-page.component';

describe('VideochatPageComponent', () => {
  let component: VideochatPageComponent;
  let fixture: ComponentFixture<VideochatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideochatPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideochatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

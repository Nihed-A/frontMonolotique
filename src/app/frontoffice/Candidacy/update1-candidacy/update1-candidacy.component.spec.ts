import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Update1CandidacyComponent } from './update1-candidacy.component';

describe('Update1CandidacyComponent', () => {
  let component: Update1CandidacyComponent;
  let fixture: ComponentFixture<Update1CandidacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Update1CandidacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Update1CandidacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

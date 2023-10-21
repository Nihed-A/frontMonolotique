import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Update1CandidacyBack1Component } from './update1-candidacy1.component';



describe('Update1CandidacyComponent', () => {
  let component: Update1CandidacyBack1Component;
  let fixture: ComponentFixture<Update1CandidacyBack1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Update1CandidacyBack1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Update1CandidacyBack1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

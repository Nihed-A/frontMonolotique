import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Update1CandidacyBackComponent } from './update1-candidacy.component';



describe('Update1CandidacyComponent', () => {
  let component: Update1CandidacyBackComponent;
  let fixture: ComponentFixture<Update1CandidacyBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Update1CandidacyBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Update1CandidacyBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

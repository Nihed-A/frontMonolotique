import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentairesComponent } from './add-commentaires.component';

describe('AddCommentairesComponent', () => {
  let component: AddCommentairesComponent;
  let fixture: ComponentFixture<AddCommentairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommentairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

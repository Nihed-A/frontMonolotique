import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommentairesComponent } from './update-commentaires.component';

describe('UpdateCommentairesComponent', () => {
  let component: UpdateCommentairesComponent;
  let fixture: ComponentFixture<UpdateCommentairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCommentairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

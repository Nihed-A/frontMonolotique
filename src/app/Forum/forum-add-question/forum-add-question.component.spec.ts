import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAddQuestionComponent } from './forum-add-question.component';

describe('ForumAddQuestionComponent', () => {
  let component: ForumAddQuestionComponent;
  let fixture: ComponentFixture<ForumAddQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumAddQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

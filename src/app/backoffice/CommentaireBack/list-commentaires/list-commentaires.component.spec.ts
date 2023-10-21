import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommentairesBackComponent } from './list-commentaires-back.component';

describe('ListCommentairesComponent', () => {
  let component: ListCommentairesBackComponent;
  let fixture: ComponentFixture<ListCommentairesBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommentairesBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommentairesBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommentairesComponent } from './list-commentaires.component';

describe('ListCommentairesComponent', () => {
  let component: ListCommentairesComponent;
  let fixture: ComponentFixture<ListCommentairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommentairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

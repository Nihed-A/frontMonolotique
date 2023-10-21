import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTableComponent } from './forum-table.component';

describe('ForumTableComponent', () => {
  let component: ForumTableComponent;
  let fixture: ComponentFixture<ForumTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

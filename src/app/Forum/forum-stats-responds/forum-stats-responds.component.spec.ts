import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumStatsRespondsComponent } from './forum-stats-responds.component';

describe('ForumStatsRespondsComponent', () => {
  let component: ForumStatsRespondsComponent;
  let fixture: ComponentFixture<ForumStatsRespondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumStatsRespondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumStatsRespondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

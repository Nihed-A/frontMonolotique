import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumStatsComponent } from './forum-stats.component';

describe('ForumStatsComponent', () => {
  let component: ForumStatsComponent;
  let fixture: ComponentFixture<ForumStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

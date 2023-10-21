import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumMainPageComponent } from './forum-main-page.component';

describe('ForumMainPageComponent', () => {
  let component: ForumMainPageComponent;
  let fixture: ComponentFixture<ForumMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

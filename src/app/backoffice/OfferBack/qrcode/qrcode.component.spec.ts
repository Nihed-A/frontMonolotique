import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeComponent1 } from './qrcode.component1';

describe('QrcodeComponent', () => {
  let component: QrcodeComponent1;
  let fixture: ComponentFixture<QrcodeComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeComponent1 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

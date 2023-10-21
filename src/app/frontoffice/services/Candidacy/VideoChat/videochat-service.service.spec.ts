import { TestBed } from '@angular/core/testing';

import { VideochatServiceService } from './videochat-service.service';

describe('VideochatServiceService', () => {
  let service: VideochatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideochatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StartserviceService } from './startservice.service';

describe('StartserviceService', () => {
  let service: StartserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

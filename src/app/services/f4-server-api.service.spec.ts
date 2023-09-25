import { TestBed } from '@angular/core/testing';

import { F4ServerApiService } from './f4-server-api.service';

describe('F4ServerApiService', () => {
  let service: F4ServerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(F4ServerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

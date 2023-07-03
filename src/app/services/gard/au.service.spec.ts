import { TestBed } from '@angular/core/testing';

import { AUService } from './au.service';

describe('AUService', () => {
  let service: AUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

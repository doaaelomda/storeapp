import { TestBed } from '@angular/core/testing';

import { NOAUService } from './noau.service';

describe('NOAUService', () => {
  let service: NOAUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NOAUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

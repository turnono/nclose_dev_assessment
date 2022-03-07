import { TestBed } from '@angular/core/testing';

import { IPService } from './ip.service';

describe('IPService', () => {
  let service: IPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

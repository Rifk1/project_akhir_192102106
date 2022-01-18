import { TestBed } from '@angular/core/testing';

import { HapusService } from './hapus.service';

describe('HapusService', () => {
  let service: HapusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HapusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

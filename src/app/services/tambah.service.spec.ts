import { TestBed } from '@angular/core/testing';

import { TambahService } from './tambah.service';

describe('TambahService', () => {
  let service: TambahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TambahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

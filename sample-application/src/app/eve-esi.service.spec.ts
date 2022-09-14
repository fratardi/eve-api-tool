import { TestBed } from '@angular/core/testing';

import { EveEsiService } from './eve-esi.service';

describe('EveEsiService', () => {
  let service: EveEsiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EveEsiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

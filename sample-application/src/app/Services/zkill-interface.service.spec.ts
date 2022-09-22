import { TestBed } from '@angular/core/testing';

import { ZkillInterfaceService } from './zkill-interface.service';

describe('ZkillInterfaceService', () => {
  let service: ZkillInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZkillInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

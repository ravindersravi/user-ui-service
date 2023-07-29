import { TestBed } from '@angular/core/testing';

import { LightboxService } from './lightbox-service.service';

describe('LightboxServiceService', () => {
  let service: LightboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

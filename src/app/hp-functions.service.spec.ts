import { TestBed, inject } from '@angular/core/testing';

import { HpFunctionsService } from './hp-functions.service';

describe('HpFunctionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HpFunctionsService]
    });
  });

  it('should be created', inject([HpFunctionsService], (service: HpFunctionsService) => {
    expect(service).toBeTruthy();
  }));
});

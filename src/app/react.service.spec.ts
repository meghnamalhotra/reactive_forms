import { TestBed, inject } from '@angular/core/testing';

import { ReactService } from './react.service';

describe('ReactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactService]
    });
  });

  it('should be created', inject([ReactService], (service: ReactService) => {
    expect(service).toBeTruthy();
  }));
});

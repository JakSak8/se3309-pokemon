import { TestBed, inject } from '@angular/core/testing';

import { UsernameService } from './username.service';

describe('UsernameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsernameService]
    });
  });

  it('should be created', inject([UsernameService], (service: UsernameService) => {
    expect(service).toBeTruthy();
  }));
});

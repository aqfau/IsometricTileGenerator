/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimplexNoiseService } from './SimplexNoise.service';

describe('Service: SimplexNoise', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimplexNoiseService]
    });
  });

  it('should ...', inject([SimplexNoiseService], (service: SimplexNoiseService) => {
    expect(service).toBeTruthy();
  }));
});

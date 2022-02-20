/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PerlinNoiseService } from './PerlinNoise.service';

describe('Service: PerlinNoise', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerlinNoiseService]
    });
  });

  it('should ...', inject([PerlinNoiseService], (service: PerlinNoiseService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DrawingService } from './Drawing.service';

describe('Service: Drawing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawingService]
    });
  });

  it('should ...', inject([DrawingService], (service: DrawingService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { HttpClient, HttpHandler } from '@angular/common/http';

import { BoonService } from './boon.service';

describe('BoonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          BoonService,
          HttpClient,
          HttpHandler
        ]
    });
  });

  it('should be created', inject([BoonService], (service: BoonService) => {
    expect(service).toBeTruthy();
  }));
});

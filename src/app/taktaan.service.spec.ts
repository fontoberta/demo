import { TestBed, inject } from '@angular/core/testing';

import { HttpClient, HttpHandler } from '@angular/common/http';

import { TaktaanService } from './taktaan.service';

describe('TaktaanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          TaktaanService,
          HttpClient,
          HttpHandler
        ]
    });
  });

  it('should be created', inject([TaktaanService], (service: TaktaanService) => {
    expect(service).toBeTruthy();
  }));
});

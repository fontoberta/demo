import { TestBed, inject } from '@angular/core/testing';

import { HttpClient, HttpHandler } from '@angular/common/http';

import { UsersService } from './users.service';

describe('BoonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          UsersService,
          HttpClient,
          HttpHandler
        ]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});

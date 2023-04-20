import { TestBed } from '@angular/core/testing';

import { CursoServioService } from './curso-servio.service';

describe('CursoServioService', () => {
  let service: CursoServioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoServioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CurdService } from './crud.service';

describe('CrudService', () => {
  let service: CurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CustomMultiSelectService } from './custom-multi-select.service';

describe('CustomMultiSelectService', () => {
  let service: CustomMultiSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomMultiSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

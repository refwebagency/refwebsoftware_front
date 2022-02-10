import { TestBed } from '@angular/core/testing';

import { QuotePdfService } from './quote-pdf.service';

describe('QuotePdfService', () => {
  let service: QuotePdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotePdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

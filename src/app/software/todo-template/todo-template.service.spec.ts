import { TestBed } from '@angular/core/testing';

import { TodoTemplateService } from './todo-template.service';

describe('TodoTemplateService', () => {
  let service: TodoTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

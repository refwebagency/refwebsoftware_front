import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePdfWritingComponent } from './quote-pdf-writing.component';

describe('QuotePdfWritingComponent', () => {
  let component: QuotePdfWritingComponent;
  let fixture: ComponentFixture<QuotePdfWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotePdfWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePdfWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

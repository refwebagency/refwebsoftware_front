import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePdfDetailComponent } from './quote-pdf-detail.component';

describe('QuotePdfDetailComponent', () => {
  let component: QuotePdfDetailComponent;
  let fixture: ComponentFixture<QuotePdfDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotePdfDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePdfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

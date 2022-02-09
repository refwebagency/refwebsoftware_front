import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePdfListComponent } from './quote-pdf-list.component';

describe('QuotePdfListComponent', () => {
  let component: QuotePdfListComponent;
  let fixture: ComponentFixture<QuotePdfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotePdfListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePdfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

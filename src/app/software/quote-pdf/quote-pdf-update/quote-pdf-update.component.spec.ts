import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePdfUpdateComponent } from './quote-pdf-update.component';

describe('QuotePdfUpdateComponent', () => {
  let component: QuotePdfUpdateComponent;
  let fixture: ComponentFixture<QuotePdfUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotePdfUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePdfUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

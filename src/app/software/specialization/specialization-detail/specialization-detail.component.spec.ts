import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationDetailComponent } from './specialization-detail.component';

describe('SpecializationDetailComponent', () => {
  let component: SpecializationDetailComponent;
  let fixture: ComponentFixture<SpecializationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

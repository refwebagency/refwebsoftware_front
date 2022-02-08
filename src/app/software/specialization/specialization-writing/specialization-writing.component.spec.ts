import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationWritingComponent } from './specialization-writing.component';

describe('SpecializationWritingComponent', () => {
  let component: SpecializationWritingComponent;
  let fixture: ComponentFixture<SpecializationWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

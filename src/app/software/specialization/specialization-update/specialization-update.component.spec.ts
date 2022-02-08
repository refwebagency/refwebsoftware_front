import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationUpdateComponent } from './specialization-update.component';

describe('SpecializationUpdateComponent', () => {
  let component: SpecializationUpdateComponent;
  let fixture: ComponentFixture<SpecializationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

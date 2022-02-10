import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningUpdateComponent } from './planning-update.component';

describe('PlanningUpdateComponent', () => {
  let component: PlanningUpdateComponent;
  let fixture: ComponentFixture<PlanningUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

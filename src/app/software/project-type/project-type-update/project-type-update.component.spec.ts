import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTypeUpdateComponent } from './project-type-update.component';

describe('ProjectTypeUpdateComponent', () => {
  let component: ProjectTypeUpdateComponent;
  let fixture: ComponentFixture<ProjectTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTypeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

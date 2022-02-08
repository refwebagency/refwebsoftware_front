import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTypeDetailComponent } from './project-type-detail.component';

describe('ProjectTypeDetailComponent', () => {
  let component: ProjectTypeDetailComponent;
  let fixture: ComponentFixture<ProjectTypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

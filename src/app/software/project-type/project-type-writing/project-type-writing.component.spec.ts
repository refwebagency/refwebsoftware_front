import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTypeWritingComponent } from './project-type-writing.component';

describe('ProjectTypeWritingComponent', () => {
  let component: ProjectTypeWritingComponent;
  let fixture: ComponentFixture<ProjectTypeWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTypeWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTypeWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

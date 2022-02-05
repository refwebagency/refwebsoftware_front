import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWritingComponent } from './user-writing.component';

describe('UserWritingComponent', () => {
  let component: UserWritingComponent;
  let fixture: ComponentFixture<UserWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

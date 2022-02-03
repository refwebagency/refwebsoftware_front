import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalContentComponent } from './principal-content.component';

describe('PrincipalContentComponent', () => {
  let component: PrincipalContentComponent;
  let fixture: ComponentFixture<PrincipalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

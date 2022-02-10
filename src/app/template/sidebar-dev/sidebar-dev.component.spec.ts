import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDevComponent } from './sidebar-dev.component';

describe('SidebarDevComponent', () => {
  let component: SidebarDevComponent;
  let fixture: ComponentFixture<SidebarDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

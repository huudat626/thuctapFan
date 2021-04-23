import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseTopComponent } from './use-top.component';

describe('UseTopComponent', () => {
  let component: UseTopComponent;
  let fixture: ComponentFixture<UseTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

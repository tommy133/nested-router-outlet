import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity11Component } from './activity11.component';

describe('Activity11Component', () => {
  let component: Activity11Component;
  let fixture: ComponentFixture<Activity11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Activity11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Activity11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

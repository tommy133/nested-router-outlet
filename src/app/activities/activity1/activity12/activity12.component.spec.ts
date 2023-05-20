import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity12Component } from './activity12.component';

describe('Activity12Component', () => {
  let component: Activity12Component;
  let fixture: ComponentFixture<Activity12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Activity12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Activity12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

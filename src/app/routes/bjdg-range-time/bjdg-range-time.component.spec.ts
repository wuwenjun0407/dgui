/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BjdgRangeTimeComponent } from './bjdg-range-time.component';

describe('RangeTimeComponent', () => {
  let component: BjdgRangeTimeComponent;
  let fixture: ComponentFixture<BjdgRangeTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BjdgRangeTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BjdgRangeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

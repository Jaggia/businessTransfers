import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BTSOverviewComponent } from './btsoverview.component';

describe('BTSOverviewComponent', () => {
  let component: BTSOverviewComponent;
  let fixture: ComponentFixture<BTSOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BTSOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BTSOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

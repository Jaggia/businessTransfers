import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHireUsComponent } from './why-hire-us.component';

describe('WhyHireUsComponent', () => {
  let component: WhyHireUsComponent;
  let fixture: ComponentFixture<WhyHireUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyHireUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyHireUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

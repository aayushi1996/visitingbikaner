import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceBookingFormComponent } from './place-booking-form.component';

describe('PlaceBookingFormComponent', () => {
  let component: PlaceBookingFormComponent;
  let fixture: ComponentFixture<PlaceBookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceBookingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

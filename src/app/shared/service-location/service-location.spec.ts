import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLocation } from './service-location';

describe('ServiceLocation', () => {
  let component: ServiceLocation;
  let fixture: ComponentFixture<ServiceLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

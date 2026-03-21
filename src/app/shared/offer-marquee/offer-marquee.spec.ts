import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferMarquee } from './offer-marquee';

describe('OfferMarquee', () => {
  let component: OfferMarquee;
  let fixture: ComponentFixture<OfferMarquee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferMarquee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferMarquee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

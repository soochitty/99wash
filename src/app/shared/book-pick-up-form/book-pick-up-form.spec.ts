import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPickUpForm } from './book-pick-up-form';

describe('BookPickUpForm', () => {
  let component: BookPickUpForm;
  let fixture: ComponentFixture<BookPickUpForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookPickUpForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPickUpForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

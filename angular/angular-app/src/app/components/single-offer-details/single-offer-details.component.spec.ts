import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOfferDetailsComponent } from './single-offer-details.component';

describe('SingleOfferDetailsComponent', () => {
  let component: SingleOfferDetailsComponent;
  let fixture: ComponentFixture<SingleOfferDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleOfferDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

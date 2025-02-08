import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingplandialogComponent } from './pricingplandialog.component';

describe('PricingplandialogComponent', () => {
  let component: PricingplandialogComponent;
  let fixture: ComponentFixture<PricingplandialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingplandialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingplandialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

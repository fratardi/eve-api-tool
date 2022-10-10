import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketBuyNSellComponent } from './market-buy-nsell.component';

describe('MarketBuyNSellComponent', () => {
  let component: MarketBuyNSellComponent;
  let fixture: ComponentFixture<MarketBuyNSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketBuyNSellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketBuyNSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

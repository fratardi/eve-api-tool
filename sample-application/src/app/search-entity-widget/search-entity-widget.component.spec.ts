import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEntityWidgetComponent } from './search-entity-widget.component';

describe('SearchEntityWidgetComponent', () => {
  let component: SearchEntityWidgetComponent;
  let fixture: ComponentFixture<SearchEntityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEntityWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEntityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

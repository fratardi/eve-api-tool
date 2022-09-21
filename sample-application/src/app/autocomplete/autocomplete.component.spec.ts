import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleterComponent } from './autocomplete.component';

describe('AutocompleteComponent', () => {
  let component: AutocompleterComponent;
  let fixture: ComponentFixture<AutocompleterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

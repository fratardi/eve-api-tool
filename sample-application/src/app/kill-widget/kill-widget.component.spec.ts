import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillWidgetComponent } from './kill-widget.component';

describe('KillWidgetComponent', () => {
  let component: KillWidgetComponent;
  let fixture: ComponentFixture<KillWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KillWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KillWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

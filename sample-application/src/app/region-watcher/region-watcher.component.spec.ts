import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionWatcherComponent } from './region-watcher.component';

describe('RegionWatcherComponent', () => {
  let component: RegionWatcherComponent;
  let fixture: ComponentFixture<RegionWatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionWatcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

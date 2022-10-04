import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityListenerComponent } from './entity-listener.component';

describe('EntityListenerComponent', () => {
  let component: EntityListenerComponent;
  let fixture: ComponentFixture<EntityListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityListenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

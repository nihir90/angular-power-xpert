import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedDevicesComponent } from './allocated-devices.component';

describe('AllocatedDevicesComponent', () => {
  let component: AllocatedDevicesComponent;
  let fixture: ComponentFixture<AllocatedDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocatedDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

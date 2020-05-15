import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSwitchUiComponent } from './light-switch-ui.component';

describe('LightSwitchUiComponent', () => {
  let component: LightSwitchUiComponent;
  let fixture: ComponentFixture<LightSwitchUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSwitchUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSwitchUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

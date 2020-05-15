import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBulbUiComponent } from './light-bulb-ui.component';

describe('LightBulbUiComponent', () => {
  let component: LightBulbUiComponent;
  let fixture: ComponentFixture<LightBulbUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightBulbUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBulbUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

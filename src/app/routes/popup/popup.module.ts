import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupRoutingModule } from './popup-routing.module';
import { PopupComponent } from './popup.component';
import { LightSwitchModule } from '../../ui/light-switch/light-switch.module';


@NgModule({
  declarations: [PopupComponent],
  imports: [
    CommonModule,
    PopupRoutingModule,
    LightSwitchModule
  ]
})
export class PopupModule {
}

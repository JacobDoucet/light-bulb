import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightSwitchRoutingModule } from './light-switch-routing.module';
import { LightSwitchComponent } from './light-switch.component';


@NgModule({
  declarations: [LightSwitchComponent],
  imports: [
    CommonModule,
    LightSwitchRoutingModule
  ]
})
export class LightSwitchModule {
}

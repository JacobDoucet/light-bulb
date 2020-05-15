import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightSwitchRoutingModule } from './light-switch-routing.module';
import { LightSwitchComponent } from './light-switch.component';
import { LightSwitchUiComponent } from './light-switch-ui/light-switch-ui.component';


@NgModule({
  declarations: [LightSwitchComponent, LightSwitchUiComponent],
  imports: [
    CommonModule,
    LightSwitchRoutingModule
  ]
})
export class LightSwitchModule { }

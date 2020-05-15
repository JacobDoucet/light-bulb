import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightBulbRoutingModule } from './light-bulb-routing.module';
import { LightBulbComponent } from './light-bulb.component';
import { LightBulbUiComponent } from './light-bulb-ui/light-bulb-ui.component';


@NgModule({
  declarations: [LightBulbComponent, LightBulbUiComponent],
  imports: [
    CommonModule,
    LightBulbRoutingModule
  ]
})
export class LightBulbModule { }

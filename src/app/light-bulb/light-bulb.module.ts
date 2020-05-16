import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightBulbRoutingModule } from './light-bulb-routing.module';
import { LightBulbComponent } from './light-bulb.component';


@NgModule({
  declarations: [LightBulbComponent],
  imports: [
    CommonModule,
    LightBulbRoutingModule
  ]
})
export class LightBulbModule { }

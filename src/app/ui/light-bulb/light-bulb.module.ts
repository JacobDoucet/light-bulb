import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBulbComponent } from './light-bulb.component';



@NgModule({
  declarations: [LightBulbComponent],
  imports: [
    CommonModule
  ],
  exports: [LightBulbComponent]
})
export class LightBulbModule { }

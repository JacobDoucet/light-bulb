import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightBulbComponent } from './light-bulb.component';

const routes: Routes = [{ path: '', component: LightBulbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightBulbRoutingModule { }

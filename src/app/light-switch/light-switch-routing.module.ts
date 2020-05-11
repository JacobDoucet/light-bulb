import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightSwitchComponent } from './light-switch.component';

const routes: Routes = [{ path: '', component: LightSwitchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightSwitchRoutingModule { }

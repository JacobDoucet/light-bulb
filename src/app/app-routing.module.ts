import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateGuard } from './guards/state.guard';
import { PopupGuard } from './guards/popup.guard';

const routes: Routes = [
  {
    path: ':state',
    outlet: 'bulb',
    loadChildren: () => import('./light-bulb/light-bulb.module').then(m => m.LightBulbModule),
    canLoad: [ StateGuard ]
  },
  {
    path: ':state',
    outlet: 'switch',
    loadChildren: () => import('./light-switch/light-switch.module').then(m => m.LightSwitchModule),
    canLoad: [ PopupGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

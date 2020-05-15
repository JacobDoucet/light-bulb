import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateGuard } from './state.guard';
import { ChildOnlyGuard } from './child-only.guard';

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
    canLoad: [ ChildOnlyGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

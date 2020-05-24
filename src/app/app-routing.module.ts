import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateGuard } from './guards/state.guard';
import { PopupGuard } from './guards/popup.guard';

const routes: Routes = [
  {
    path: ':state',
    outlet: 'bulb',
    loadChildren: () => import('./routes/main/main.module').then(m => m.MainModule),
    canLoad: [ StateGuard ]
  },
  {
    path: ':state',
    outlet: 'switch',
    loadChildren: () => import('./routes/popup/popup.module').then(m => m.PopupModule),
    canLoad: [ PopupGuard ]
  },
  {
    path: '**',
    redirectTo: '/(bulb:off)'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

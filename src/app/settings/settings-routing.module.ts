import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

const SettingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(SettingsRoutes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

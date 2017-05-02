import { NgModule } from '@angular/core';
import { FavoriteComponent } from './favorite.component';
import { RouterModule, Routes } from '@angular/router';

const FavoriteRoutes: Routes = [
  { path: '', component: FavoriteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(FavoriteRoutes)],
  exports: [RouterModule]
})
export class FavoriteRoutingModule {}

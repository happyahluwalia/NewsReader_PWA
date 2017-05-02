import { SharedModule } from './../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { FavoriteRoutingModule } from './favorite-routing';
import { FavoriteComponent } from './favorite.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [FavoriteComponent]
})
export class FavoriteModule { }

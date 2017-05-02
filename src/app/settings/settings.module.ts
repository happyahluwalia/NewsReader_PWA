import { SettingsRoutingModule } from './settings-routing.module';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    SettingsRoutingModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }

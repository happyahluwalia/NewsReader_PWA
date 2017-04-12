import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NewspaneComponent } from './newspane.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
 // exports: [NewspaneComponent],
  declarations: [NewspaneComponent]
})
export class NewspaneModule { }

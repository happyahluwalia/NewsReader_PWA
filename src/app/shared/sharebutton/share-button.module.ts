import { WindowService } from './service/window.service';
import { ShareButtonService } from './service/share-button.service';
import { ShareButtonDirective } from './share-button.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShareButtonDirective],
  exports: [ShareButtonDirective],
  providers: [ShareButtonService, WindowService]
})
export class ShareButtonModule {

}

import { ShareButtonModule } from './sharebutton/share-button.module';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SocialShareComponent } from './social-share/social-share.component';
import { SocialDirective } from './social-share/social.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SocialDirective, SocialShareComponent],
  imports: [ CommonModule,
            FormsModule,
            MaterialModule,
            FlexLayoutModule,
           // BrowserAnimationsModule,
            ShareButtonModule ],
  exports: [ SocialDirective, SocialShareComponent ],
  entryComponents: [SocialShareComponent]
/*  Due to the dynamic nature of the MdDialog, and its usage of ViewContainerRef#createComponent() to create the component on the fly,
the AOT compiler will not know to create the proper ComponentFactory for your dialog component by default.
You must include your dialog class in the list of entryComponents in your module definition so that the AOT compiler
knows to create the ComponentFactory for it.
Refer to notes on AOT compilation - https://material.angular.io/components/component/dialog
*/
})
export class SharedModule {}

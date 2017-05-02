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

})
export class SharedModule {}

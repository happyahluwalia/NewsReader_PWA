import { ShareProvider } from '../sharebutton/helper/share-provider.enum';
import { Helper } from '../sharebutton/helper/share-helper';
import { ShareButtonService } from './service/share-button.service';
import { ShareArgs } from './helper/share-args';
import './helper/share-helper';


import { Directive, Input, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appShareButton]'
})
export class ShareButtonDirective {
  private provider: ShareProvider;

  @Input() set shareButton(value: string | number) {
    this.provider = Helper.getProviderNum(value, ShareProvider);

    if (typeof this.provider === 'undefined') {
      throw new Error('[shareButton] must be set to one of the value that are supported');
    }
  }

  // Share arguments
  @Input() sbUrl: string;
  @Input() sbTitle: string;
  @Input() sbDescription: string;
  @Input() sbImage: string;
  @Input() sbTags: string;

  // Output for popup closed
  @Output() sbPopupClosed = new EventEmitter<ShareProvider>();

  @HostListener('click') onclick() {
    this.share();
  }

  // Open Share window
  share() {
     const args = new ShareArgs(this.sbUrl, this.sbTitle, this.sbDescription, this.sbImage, this.sbTags );

     this.sbService.share(this.provider, args, this.sbPopupClosed);
  }

  constructor(private sbService: ShareButtonService) { }

}

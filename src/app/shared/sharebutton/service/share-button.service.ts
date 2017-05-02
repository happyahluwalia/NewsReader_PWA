import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

import { WindowService } from './window.service';
import { ShareProvider } from './../helper/share-provider.enum';
import { ShareArgs } from './../helper/share-args';
import { Helper } from './../helper/share-helper';


@Injectable()
export class ShareButtonService {

  // Window Object
  window: Window;
  // Optional Params
  windowWidth = 500;
  windowHeight = 400;

  // Site Twitter account - Add via @Twitter Account to the tweet
  twitterAccount = 'appleofeye';

  constructor(window: WindowService, private http: Http) {
    this.window = window.nativeWindow;
  }

 /* validateURL(url: string) {
    return encodeURIComponent(url);
  }*/

  // Open share window
  share(type: ShareProvider, args: ShareArgs,
        popUpClosed: EventEmitter<ShareProvider>) {

  // Include twitter account in arguments for twitter button
  if (this.twitterAccount) {
    args = Object.assign({}, args, { via : this.twitterAccount});
  }

   // Check for mobile browser
   // TODO - There has to be a better way, get it from browser header
   if (this.window.innerWidth <= 480) {
     args = Object.assign({}, args, {mobile : true});
   }

  const popUp = this.window.open(Helper.ShareFactory(args, type), 'newwindow', this.windowAttr());

   // Emit click button
   if (this.window) {
     const pollTimer = this.window.setInterval(() => {
        if (popUp.closed) {
            this.window.clearInterval(pollTimer);
            popUpClosed.emit(type);
        }
     }, 200);
   }
  // TODO : Share counts not done

}

  private windowAttr(): string {
    return 'width=' + this.windowWidth + ', height=' + this.windowHeight;
  }
}

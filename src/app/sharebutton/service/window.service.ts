import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {

  get nativeWindow(): any {
    return this._window();
  }

  private _window(): any {
   // return the global native browser window
   return typeof window !== 'undefined' ? window : undefined;
 }

}


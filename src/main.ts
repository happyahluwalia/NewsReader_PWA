import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if ('serviceWorker' in navigator) {
     console.log('navigator supports service worker');
     navigator.serviceWorker.register('./service-worker.js')
             .then(msg => console.log('service worker reqistered successfully'))
             .catch(msg => console.log('error ' + msg));
}

platformBrowserDynamic().bootstrapModule(AppModule);

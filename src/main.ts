// import polyfills
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// import angular2 dpes
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {Ng1AppModule} from './app/ng1_app';
import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  const upgrade = (<any>ref.instance).upgrade;
  upgrade.bootstrap(document.body, [Ng1AppModule.name]);
});

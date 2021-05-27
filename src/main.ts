import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// for AngularJS Support
import * as angular from 'angular';
import {setAngularJSGlobal} from '@angular/upgrade/static';
// import ajsApp from './app/register/register.component';
// import states from './app/register/co';

setAngularJSGlobal(angular);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

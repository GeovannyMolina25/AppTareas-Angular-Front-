import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

platformBrowserDynamic()
  .bootstrapModule(AppComponent, {
    providers: [importProvidersFrom(RouterModule.forRoot(routes))],
  })
  .catch((err) => console.error(err));

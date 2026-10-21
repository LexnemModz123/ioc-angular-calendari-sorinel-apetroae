import { ApplicationConfig, provideBrowserGlobalErrorListeners, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import localeCa from '@angular/common/locales/ca';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeCa);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {provide: LOCALE_ID, useValue: 'ca'}
  ]
};

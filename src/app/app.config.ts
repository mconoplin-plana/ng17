import { ApplicationConfig, ɵprovideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // { provide: NgZone, useClass: ɵNoopNgZone }
    ɵprovideZonelessChangeDetection(), provideAnimationsAsync()
  ]
};

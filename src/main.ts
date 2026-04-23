import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({
      mode: 'md',
    }),
    provideRouter(routes, withPreloading(PreloadAllModules)),

    // Configuración de Firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    // Configuración de Remote Config
    provideRemoteConfig(() => {
      const remoteConfig = getRemoteConfig();

      // bajamos el tiempo de caché para ver
      remoteConfig.settings.minimumFetchIntervalMillis = environment.production
        ? 3600000
        : 0;

      remoteConfig.defaultConfig = {
        show_edit_button: false,
      };

      return remoteConfig;
    }),
  ],
});

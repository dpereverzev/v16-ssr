import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideClientHydration } from '@angular/platform-browser';

const appServerConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, appServerConfig)

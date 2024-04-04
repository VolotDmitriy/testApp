import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { Route } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {ReactiveFormsModule} from "@angular/forms";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};


export const appRoutes: Route[] = [
  { path: '', component: AuthComponent },
  { path: 'user-info', component: UserInfoComponent }
];

export const appImports = [
  // Другие импорты, если есть
  ReactiveFormsModule
];

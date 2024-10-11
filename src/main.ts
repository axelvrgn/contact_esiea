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

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5gwQl15tn9Mfo_hSBDkLzV2faSzrSLr0',
  authDomain: 'contact-esiea-32382.firebaseapp.com',
  projectId: 'contact-esiea-32382',
  storageBucket: 'contact-esiea-32382.appspot.com',
  messagingSenderId: '1097429363870',
  appId: '1:1097429363870:web:efdfc78b74ef2e48fc1f8f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});

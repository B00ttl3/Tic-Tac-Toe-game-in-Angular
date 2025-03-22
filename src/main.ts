import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  // Define your routes here if needed
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()) // Enables Hash-based Routing
  ]
}).catch(err => console.error(err));

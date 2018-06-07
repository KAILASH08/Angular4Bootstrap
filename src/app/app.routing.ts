import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewPackagescheduleComponent } from './new-packageschedule/new-packageschedule.component';

const appRoutes: Routes = [
    { path: 'AppComponent', component: AppComponent },
    { path: 'new-packageschedule', component: NewPackagescheduleComponent }
  ];
   
  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
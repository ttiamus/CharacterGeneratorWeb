import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemographicsComponent } from './demographics.component';

const demographicsRoutes: Routes = [
  { path: '', pathMatch: 'full', component: DemographicsComponent } //route is defined in app.routing to enable lazy loading
]

export const demographicsRouting: ModuleWithProviders = RouterModule.forChild(demographicsRoutes);

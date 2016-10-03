import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemographicsComponent } from './demographics.component';

const demographicsRoutes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: '/demographics' },
  { path: '', pathMatch: 'full', component: DemographicsComponent }
]

export const demographicsRouting: ModuleWithProviders = RouterModule.forChild(demographicsRoutes);

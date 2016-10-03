import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin.component'

const adminRoutes: Routes = ([
  { path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'items', pathMatch: "full"},
      //{ path: 'demographics', loadChildren: 'app/demographics/demographics.module' },
      { path: 'items', loadChildren: 'app/item-admin/item-admin.module#ItemAdminModule' },
      /*{ path: 'deities', loadChildren: 'app/deities/deity.module' },*/
    ]}
]);

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
import { Routes,
         RouterModule } from '@angular/router';

const adminRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
    }
];

const itemRoutes: Routes = [
    {
        path: 'items',
        loadChildren: 'app/items/item.module#ItemModule',
    }
]

const demographicsRoutes: Routes = [
    {
        path: 'demographics',
        loadChildren: 'app/demographics/demographics.module#DemographicsModule',
    }
]

const appRoutes: Routes = [
  ...adminRoutes,
  ...itemRoutes,
  ...demographicsRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);


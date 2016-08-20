import { Routes,
         RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'demographics', loadChildren: 'app/demographics/demographics.module' },
  { path: 'items', loadChildren: 'app/items/item.module' },
  /*{ path: 'deities', loadChildren: 'app/deities/deity.module' },
  { path: 'admin', loadChildren: 'app/admin/admin.module' }*/
];

export const routing = RouterModule.forRoot(routes);


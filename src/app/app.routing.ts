import { Routes,
         RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  //{ path: 'admin', loadChildren: 'app/admin/admin.module' },
];

export const routing = RouterModule.forRoot(routes);


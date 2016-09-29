import { Routes,
         RouterModule } from '@angular/router';

const appRoutes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full'},
  //{ path: 'admin', loadChildren: 'app/admin/admin.module' },
]

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);


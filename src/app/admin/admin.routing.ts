import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component'

export const routing = RouterModule.forChild([
  { path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'items', pathMatch: "full"},
      //{ path: 'demographics', loadChildren: 'app/demographics/demographics.module' },
      { path: 'items', loadChildren: 'app/item-admin/item-admin.module' },
      /*{ path: 'deities', loadChildren: 'app/deities/deity.module' },*/
    ]}
]);

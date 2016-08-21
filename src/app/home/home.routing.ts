import { RouterModule }  from '@angular/router';

import { HomeComponent } from './home.component';

export const routing = RouterModule.forChild([
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'demographics', pathMatch: "full"},
      { path: 'demographics', loadChildren: 'app/demographics/demographics.module' },
      { path: 'items', loadChildren: 'app/items/item.module' },
      /*{ path: 'deities', loadChildren: 'app/deities/deity.module' },*/
    ]}
]);
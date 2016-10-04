import { RouterModule }  from '@angular/router';

import { ItemListAdminComponent } from './item-list-admin.component';
import { ItemAdminComponent } from './item-admin.component';

export const routing = RouterModule.forChild([
  { path: '', component: ItemListAdminComponent} , //route is defined in app.routing to enable lazy loading
  { path: 'new', component: ItemAdminComponent },
  { path: ':id', component: ItemAdminComponent },
]);
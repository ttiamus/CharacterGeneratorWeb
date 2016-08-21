import { RouterModule }  from '@angular/router';

import { ItemListAdminComponent } from './item-list-admin.component';
import { ItemAdminComponent } from './item-admin.component';

export const routing = RouterModule.forChild([
  { path: '', component: ItemListAdminComponent} , // /admin/items
  { path: ':id', component: ItemAdminComponent }
]);
import { RouterModule }  from '@angular/router';

import { ItemComponent } from './item.component';

import { ItemListComponent } from './item-list.component';


export const routing = RouterModule.forChild([
  { path: '', component: ItemListComponent} ,
  { path: 'item/:id', component: ItemComponent },
]);
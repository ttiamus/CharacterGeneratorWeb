import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { Item }               from './item.model';
import { ItemService }        from './item.service';
import { ItemComponent }      from './item.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemListComponent }  from './item-list.component';
import { ItemHomeComponent }  from './item-home.component';

import { itemRouting }        from './items.routing';

@NgModule({
  imports:      [ SharedModule, 
                  itemRouting ],
  declarations: [ ItemComponent, 
                  ItemDetailComponent,
                  ItemListComponent,
                  ItemHomeComponent ],
  providers:    [ ItemService ]
})
export class ItemModule { }
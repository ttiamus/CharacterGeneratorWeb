import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { Item }               from './item.model';
import { ItemService }        from './item.service';
import { ItemComponent }      from './item.component';
import { ItemListComponent }  from './item-list.component';

import { routing }            from './items.routing';

@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ ItemComponent, 
                  ItemListComponent ],
  providers: [ ItemService ]
})
export default class ItemModule { }
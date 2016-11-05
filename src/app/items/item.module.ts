import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { ModalModule }        from 'ng2-bootstrap/ng2-bootstrap';

//import { Item }               from './item.model';
import { ItemService }        from './item.service';
import { ItemComponent }      from './item.component';
import { ItemSelectorComponent } from './item-selector.component';

import { itemRouting }        from './items.routing';

@NgModule({
  imports:      [ SharedModule,
                  ModalModule, 
                  itemRouting ],
  declarations: [ ItemComponent, 
                  ItemSelectorComponent ],
  providers:    [ ItemService ]
})
export class ItemModule { }
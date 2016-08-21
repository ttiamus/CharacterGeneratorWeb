import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { Item }               from './item-admin.model';
import { ItemAdminService }        from './item-admin.service';
import { ItemAdminComponent }      from './item-admin.component';
import { ItemListAdminComponent }  from './item-list-admin.component';

import { routing }            from './item-admin.routing';

@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ ItemAdminComponent, 
                  ItemListAdminComponent ],
  providers: [ ItemAdminService ]
})
export default class ItemAdminModule { }
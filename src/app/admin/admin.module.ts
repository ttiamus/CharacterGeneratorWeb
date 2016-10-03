import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { AdminComponent }      from './admin.component';

import { adminRouting }            from './admin.routing';

@NgModule({
  imports:      [ SharedModule, adminRouting ],
  declarations: [ AdminComponent ]
})
export class AdminModule { }
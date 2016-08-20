import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { AdminComponent } from './admin.component';

import { routing }            from './admin.routing';

@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ AdminComponent ]
})
export default class AdminModule { }
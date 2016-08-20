import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { HomeComponent }      from './home.component';

import { routing }            from './home.routing';

@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }
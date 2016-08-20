import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { DemographicsComponent } from './demographics.component';

import { routing }            from './demographics.routing';

@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ DemographicsComponent ]
})
export default class DemographicsModule { }
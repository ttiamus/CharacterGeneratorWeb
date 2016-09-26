import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { DemographicsComponent } from './demographics.component';
import { StatsComponent } from '../stats'
import { DeityComponent } from '../deities'

import { routing }            from './demographics.routing';

@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ DemographicsComponent, StatsComponent, DemographicsComponent ]
})
export default class DemographicsModule { }
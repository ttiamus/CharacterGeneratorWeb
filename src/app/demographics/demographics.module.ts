import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { DemographicsComponent } from './demographics.component';
import { StatsModule } from '../stats/stats.module';

import { demographicsRouting } from './demographics.routing';

@NgModule({
  imports:      [ //DeityModule, 
                  StatsModule, 
                  SharedModule, 
                  demographicsRouting ],
  declarations: [ DemographicsComponent ],
})
export class DemographicsModule { }
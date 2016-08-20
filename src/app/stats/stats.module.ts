import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { StatsComponent }      from './stats.component';


@NgModule({
  imports:      [ SharedModule ],
  declarations: [ StatsComponent ]
})
export default class StatsModule { }
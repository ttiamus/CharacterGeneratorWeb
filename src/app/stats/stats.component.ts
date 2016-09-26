import { Component, Input } from '@angular/core';

import { Stats } from './stats.model';

@Component({
  //moduleId: module.id,
  selector: 'cg-stats',
  templateUrl: 'stats.component.html'
})
export class StatsComponent {
  @Input() stats: Stats;    //This allows you to export the hero from this component into another
  
  constructor ()
  {
      this.stats = new Stats();
  }
}

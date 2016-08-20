import { RouterModule } from '@angular/router';
import { DemographicsComponent } from './demographics.component'

export const routing = RouterModule.forChild([
  { path: '', pathMatch: 'full', component: DemographicsComponent }
]);

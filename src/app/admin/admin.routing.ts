import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component'

export const routing = RouterModule.forChild([
  { path: '', pathMatch: 'full', component: AdminComponent }
]);

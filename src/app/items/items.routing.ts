import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { ItemComponent } from './item.component';

const itemRoutes: Routes = [
  { path: '', 
    component: ItemComponent,
    //need to readd detail component
  }
]

export const itemRouting: ModuleWithProviders = RouterModule.forChild(itemRoutes);
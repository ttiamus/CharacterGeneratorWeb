import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { ItemComponent } from './item.component';

const itemRoutes: Routes = [
  { path: 'items', 
    component: ItemComponent
  }
]

export const itemRouting: ModuleWithProviders = RouterModule.forChild(itemRoutes);
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { ItemComponent } from './item.component';
import { ItemListComponent } from './item-list.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemHomeComponent }   from './item-home.component';

const itemRoutes: Routes = [
  { path: 'items', 
    component: ItemComponent,
    children: [
      {
        path: '',
        component: ItemListComponent,
        children: [
          { 
            path: ':id', 
            component: ItemDetailComponent 
          },
          {
            path: '',
            component: ItemHomeComponent
          }
        ]
      }
    ]
  }
]

export const itemRouting: ModuleWithProviders = RouterModule.forChild(itemRoutes);
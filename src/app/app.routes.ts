import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './home';
import { AdminRoutes } from './admin'
import { DemographicsRoutes } from './demographics';
import { DeitiesRoutes } from './deities'
import { ItemsRoutes } from './items';

//import { CrisisCenterRoutes } from './crisis-center/crisis-center.routes';
//import { CrisisDetailGuard }  from './crisis-center/crisis-detail.guard';
//import { HeroesRoutes }       from './heroes/heroes.routes';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AdminRoutes,
  ...DemographicsRoutes,
  ...DeitiesRoutes,
  ...ItemsRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
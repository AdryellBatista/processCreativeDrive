import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AccessGuard } from './guards/accessGuard';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AccessGuard],
    children: [{
      path: '',
      redirectTo: '/starter',
      pathMatch: 'full'
    }, {
      path: '',
      loadChildren: './material-component/material.module#MaterialComponentsModule'
    }, {
      path: 'starter',
      loadChildren: './starter/starter.module#StarterModule'
    }]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

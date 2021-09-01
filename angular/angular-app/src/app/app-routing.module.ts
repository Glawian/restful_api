import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { OffersComponent } from './components/offers/offers.component';
import { OopsComponent } from './components/oops/oops.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'offer',
    pathMatch: 'full',
  },
  {
    path: 'offer',
    component: OffersComponent
  },
  {
    path: 'category',
    component: CategoriesComponent
  },
  {
    path: '**',
    component: OopsComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);

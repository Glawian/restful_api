import { Routes, RouterModule } from '@angular/router';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OffersComponent } from './components/offers/offers.component';
import { OopsComponent } from './components/oops/oops.component';
import { SingleOfferDetailsComponent } from './components/single-offer-details/single-offer-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'offer',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'offer',
        component: OffersComponent
      },
      {
        path: 'offer/:offerId',
        component: SingleOfferDetailsComponent
      },
      {
        path: 'add-offer',
        component: AddOfferComponent
      },
    ]
  },
  {
    path: '**',
    component: OopsComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);

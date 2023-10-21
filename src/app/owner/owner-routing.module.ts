import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationPagesComponent } from './accomodation-pages/accomodation-pages.component';
import { AccomodationOffersComponent } from './accomodation-offers/accomodation-offers.component';
import { AccomodationOfferDetailsComponent } from './accomodation-offer-details/accomodation-offer-details.component';

const routes: Routes = [
  {
    path:'',
    component:AccomodationPagesComponent,
    children:[
      {path:'accomodationOffers',component:AccomodationOffersComponent},
      {path:'offerDetails/:id', component:AccomodationOfferDetailsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }

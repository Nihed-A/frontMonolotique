import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { AccomodationOffersComponent } from './accomodation-offers/accomodation-offers.component';
import { AccomodationPagesComponent } from './accomodation-pages/accomodation-pages.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ForumModule } from '../Forum/forum.module';
import { OwnerNavbarComponent } from './owner-navbar/owner-navbar.component';
import { AlertModule } from '../Alert/alert.module';
import { AccomodationOfferDetailsComponent } from './accomodation-offer-details/accomodation-offer-details.component';
import { NotesComponent } from './notes/notes.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccomodationOffersComponent,
    AccomodationPagesComponent,
    PaginationComponent,
    OwnerNavbarComponent,
    AccomodationOfferDetailsComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    AlertModule,
    NgxPaginationModule
  ]
})
export class OwnerModule { }

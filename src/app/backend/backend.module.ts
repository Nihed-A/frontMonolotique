import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendRoutingModule } from './backend-routing.module';
import { ClaimComponent } from './claim/claim.component';
import { TemplateComponent } from './template/template.component';
import { FormsModule } from '@angular/forms';
import { ClaimService } from '../Claim/services/claim.service';
import { InterceptService } from '../Alert/services/intercept.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AccomodationListComponent } from './accomodation-list/accomodation-list.component';
import { AddAccomodationComponent } from './add-accomodation/add-accomodation.component';
import { ForumTableComponent } from './forum/forum-table/forum-table.component';
import { ForumPageComponent } from './forum/forum-page/forum-page.component';
import { UpdateAccomodationComponent } from './update-accomodation/update-accomodation.component';
import { ForumService } from './services/forum.service';
import { PaginationModule } from '../pagination/pagination.module';


@NgModule({
  declarations: [
    ClaimComponent,
    TemplateComponent,
    AccomodationListComponent,
    AddAccomodationComponent,
    ForumTableComponent,
    ForumPageComponent,
    UpdateAccomodationComponent
  ],
  imports: [
    PaginationModule,
    CommonModule,
    BackendRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    ClaimService,
    ForumService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ]
})
export class BackendModule { }

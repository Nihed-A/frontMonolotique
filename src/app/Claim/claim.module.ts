import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { ClaimRoutingModule } from './claim-routing.module';
import { ClaimMainPageComponent } from './claim-main-page/claim-main-page.component';
import { ClaimService } from './services/claim.service';
import { InterceptService } from '../Alert/services/intercept.service';
import { ListClaimComponent } from './list-claim/list-claim.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClaimMainPageComponent,
    ListClaimComponent,
    AddClaimComponent
  ],
  imports: [
    CommonModule,
    ClaimRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    ClaimService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ]
})
export class ClaimModule { }

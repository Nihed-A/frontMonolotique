import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertRoutingModule } from './alert-routing.module';
import { AlertMainPageComponent } from './alert-main-page/alert-main-page.component';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { ListAlertComponent } from './list-alert/list-alert.component';
import { AlertService } from './services/alert.service';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { InterceptService } from './services/intercept.service';


@NgModule({
  declarations: [
    AlertMainPageComponent,
    AddAlertComponent,
    ListAlertComponent
  ],
  imports: [
    CommonModule,
    AlertRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    AlertService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ]
})
export class AlertModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertMainPageComponent } from './alert-main-page/alert-main-page.component';

const routes: Routes = [
  {path: '',component: AlertMainPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule { }

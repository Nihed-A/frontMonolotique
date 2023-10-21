import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimMainPageComponent } from './claim-main-page/claim-main-page.component';
import { ListClaimComponent } from './list-claim/list-claim.component';


const routes: Routes = [
  {path: '',component: ClaimMainPageComponent},
  { path: 'all-claims', component: ListClaimComponent }, // Add this route

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimRoutingModule { }

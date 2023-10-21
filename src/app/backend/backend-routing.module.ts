import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ClaimComponent } from './claim/claim.component';
import { AddAccomodationComponent } from './add-accomodation/add-accomodation.component';
import { AccomodationListComponent } from './accomodation-list/accomodation-list.component';
import { ForumPageComponent } from './forum/forum-page/forum-page.component';

const routes: Routes = [
  {
    path:'',
    component:TemplateComponent,
    children:[
     {path:'claim',component:ClaimComponent},
     {path:'addAccomodation',component:AddAccomodationComponent},
     {path:'accomodationList',component:AccomodationListComponent},
     {path:'forumList',component:ForumPageComponent},
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }

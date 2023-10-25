import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseBackComponent } from './backoffice/base-back/base-back.component';
import { PersonalPageComponent } from './frontoffice/personal-page/personal-page.component';
import { BaseFrontComponent } from './frontoffice/base-front/base-front.component';
import { AddOffersComponent } from './frontoffice/Offer/add-offers/add-offers.component';
import { UpdateOffersComponent } from './frontoffice/Offer/update-offers/update-offers.component';
import { QrcodeComponent1 } from './backoffice/OfferBack/qrcode/qrcode.component1';
import { ListCommentairesComponent } from './frontoffice/Commentaire/list-commentaires/list-commentaires.component';
import { AddCommentairesComponent } from './frontoffice/Commentaire/add-commentaires/add-commentaires.component';
import { UpdateCommentairesComponent } from './frontoffice/Commentaire/update-commentaires/update-commentaires.component';
import { ListOffersBackComponent } from './backoffice/OfferBack/list-offers-back/list-offers-back.component';
import { UpdateOffersBackComponent } from './backoffice/OfferBack/update-offers-back/update-offers-back.component';
import { AddOffersBackComponent } from './backoffice/OfferBack/add-offers/add-offers-back.component';
import { ListCommentairesBackComponent } from './backoffice/CommentaireBack/list-commentaires/list-commentaires-back.component';
import { StatistiquesComponent } from './backoffice/OfferBack/statistiques/statistiques.component';
import { QrcodeComponent } from './frontoffice/qrcode/qrcode.component';
import { ListCandidacyComponent } from './backoffice/Candidacy/list-candidacy/list-candidacy.component';
import { ListCandidacy1Component } from './backoffice/Candidacy/list-candidacy 1/list-candidacy1.component';
import { AddCandidacyComponent } from './frontoffice/Candidacy/add-candidacy/add-candidacy.component';
import { VideochatComponent } from './frontoffice/VideoChat1/videochat/videochat.component';
import { UpdateCandidacyComponent } from './frontoffice/Candidacy/update-candidacy/update-candidacy.component';
import { Update1CandidacyComponent } from './frontoffice/Candidacy/update1-candidacy/update1-candidacy.component';
import { Update1CandidacyBackComponent } from './backoffice/Candidacy/update1-candidacy-back/update1-candidacy.component';
import { Update1CandidacyBack1Component } from './backoffice/Candidacy/update1-candidacy-back1/update1-candidacy1.component';
import { ListResultComponent } from './frontoffice/Result/list-result/list-result.component';
import { ListResultBackComponent } from './backoffice/Candidacy/list-result-back/list-result.component';
import { AddResultComponent } from './frontoffice/Result/add-result/add-result.component';
import { AddResultBackComponent } from './backoffice/Candidacy/add-result-back/add-result.component';
import { SigninComponent } from './frontoffice/signin/signin.component';
import { SignupComponent } from './frontoffice/signup/signup.component';
import { ProfileComponent } from './frontoffice/profile/profile.component';
import { ForgetpasswordComponent } from './frontoffice/forgetpassword/forgetpassword.component';
import { EditprofileComponent } from './frontoffice/editprofile/editprofile.component';
import { UploadimageComponent } from './frontoffice/uploadimage/uploadimage.component';
import { ListusersComponent } from './backoffice/listusers/listusers.component';
import { AccommodationListComponent } from './Accomodation/ListAccomodation/accommodation-list/accommodation-list.component';
import { AccommodationDetailComponent } from './accommodation-detail/accommodation-detail.component'; 
import { AccommodationAddComponent } from './accommodation-add/accommodation-add.component';


const routes: Routes = [
  {path: 'home',component: BaseFrontComponent},
  {path: 'dash',component: BaseBackComponent},
  {path: 'myaccount',component: PersonalPageComponent},
  {
    path:'alert',
    loadChildren: ()=>
    import('./Alert/alert.module').then((m) => m.AlertModule),
  },
  {
    path:'claim',
    loadChildren: ()=>
    import('./Claim/claim.module').then((m) => m.ClaimModule),
  },
  {
    path:'dashboard',
    loadChildren: ()=>
    import('./backend/backend.module').then((b) => b.BackendModule),
  },
  {
    path: 'forum',
    loadChildren: () => import('./Forum/forum.module').then((m) => m.ForumModule)
  },
  {
    path:'owner',
    loadChildren: ()=>
    import('./owner/owner.module').then((o) => o.OwnerModule),
  },
  { path :'addOffers',component: AddOffersComponent} ,
    { path :'updateOffers/:idOffre',component: UpdateOffersComponent} ,
    { path :'qrcode',component: QrcodeComponent1} ,
    { path :'listCommentaires',component: ListCommentairesComponent} ,
    { path :'addCommentaires',component: AddCommentairesComponent} ,
    { path :'updateCommentaires/:idComment',component: UpdateCommentairesComponent} ,
    { path :'listOffersBack',component: ListOffersBackComponent} ,
    { path :'updateBackOffers/:idOffre',component: UpdateOffersBackComponent} ,
    { path :'addBackOffers',component: AddOffersBackComponent} ,
    { path :'listBackCommentaires',component: ListCommentairesBackComponent} ,
    { path: 'statistiques', component: StatistiquesComponent },
    //{ path: '', redirectTo: 'listcandidacy', pathMatch: 'full' },
  { path :'listcandidacy',component: ListCandidacyComponent},
  { path :'listcandidacy1',component: ListCandidacy1Component},
  { path :'addCandidacy',component: AddCandidacyComponent},
  { path: 'statistiques', component: StatistiquesComponent },
{ path :'qrcode',component: QrcodeComponent  },
  { path :'video',component: VideochatComponent},
  { path: 'update/:idCandidacy', component: UpdateCandidacyComponent },
  { path: 'update1/:idCandidacy', component: Update1CandidacyComponent },
  { path: 'update2/:idCandidacy', component: Update1CandidacyBackComponent },
  { path: 'update3/:idCandidacy', component: Update1CandidacyBack1Component },
  { path: 'search-candidacy', component: ListCandidacyComponent },
  { path: 'results', component: ListResultComponent },
  { path: 'results1', component: ListResultBackComponent },
  { path :'listresult',component: ListResultComponent},
  { path :'listresult1',component: ListResultBackComponent},
  { path :'addResult',component: AddResultComponent},
  { path :'addResult1',component: AddResultBackComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'forgetpassword', component: ForgetpasswordComponent},
  {path: 'editprofile', component: EditprofileComponent},
  {path: 'updateimage', component: UploadimageComponent},
  {path: 'listusers', component: ListusersComponent},
  { path: 'list', component: AccommodationListComponent },
 
  { path: 'accommodation/:id', component: AccommodationDetailComponent },
  { path: 'add-accommodation', component: AccommodationAddComponent },


    {path:'', redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

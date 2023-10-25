import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseBackComponent } from './backoffice/base-back/base-back.component';
import { BaseFrontComponent } from './frontoffice/base-front/base-front.component';
import { PersonalPageComponent } from './frontoffice/personal-page/personal-page.component';
import { InterceptorService } from './frontoffice/services/interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './frontoffice/navbar/navbar.component';
import { FooterComponent } from './frontoffice/footer/footer.component';
import { AlertModule } from './Alert/alert.module';
import { InterceptService } from './Alert/services/intercept.service';
import { ClaimModule } from './Claim/claim.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCommentairesBackComponent } from './backoffice/CommentaireBack/list-commentaires/list-commentaires-back.component';
import { AddOffersBackComponent } from './backoffice/OfferBack/add-offers/add-offers-back.component';
import { ListOffersBackComponent } from './backoffice/OfferBack/list-offers-back/list-offers-back.component';
import { ListCandidacyComponent } from './backoffice/Candidacy/list-candidacy/list-candidacy.component';
import { ListCandidacy1Component } from './backoffice/Candidacy/list-candidacy 1/list-candidacy1.component';
import { Update1CandidacyBack1Component } from './backoffice/Candidacy/update1-candidacy-back1/update1-candidacy1.component';
import { AddCandidacyComponent } from './frontoffice/Candidacy/add-candidacy/add-candidacy.component';
import { UpdateCandidacyComponent } from './frontoffice/Candidacy/update-candidacy/update-candidacy.component';
import { QrcodeComponent } from './frontoffice/qrcode/qrcode.component';
import { VideochatComponent } from './frontoffice/VideoChat1/videochat/videochat.component';
import { VideochatPageComponent } from './frontoffice/VideoChat1/VideoChat-page/videochat-page/videochat-page.component';
import { AddResultComponent } from './frontoffice/Result/add-result/add-result.component';
import { ListResultComponent } from './frontoffice/Result/list-result/list-result.component';
import { DeleteResultComponent } from './frontoffice/Result/delete-result/delete-result.component';
import { Update1CandidacyComponent } from './frontoffice/Candidacy/update1-candidacy/update1-candidacy.component';
import { Update1CandidacyBackComponent } from './backoffice/Candidacy/update1-candidacy-back/update1-candidacy.component';
import { ListResultBackComponent } from './backoffice/Candidacy/list-result-back/list-result.component';
import { StatistiquesComponent } from './backoffice/OfferBack/statistiques/statistiques.component';
import { AddResultBackComponent } from './backoffice/Candidacy/add-result-back/add-result.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddOffersComponent } from './frontoffice/Offer/add-offers/add-offers.component';
import { UpdateOffersComponent } from './frontoffice/Offer/update-offers/update-offers.component';
import { UpdateCommentairesComponent } from './frontoffice/Commentaire/update-commentaires/update-commentaires.component';
import { ListCommentairesComponent } from './frontoffice/Commentaire/list-commentaires/list-commentaires.component';
import { AddCommentairesComponent } from './frontoffice/Commentaire/add-commentaires/add-commentaires.component';
import { UpdateOffersBackComponent } from './backoffice/OfferBack/update-offers-back/update-offers-back.component';
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



@NgModule({
  declarations: [
    AppComponent,
    BaseBackComponent,
    BaseFrontComponent,
    PersonalPageComponent,
    NavbarComponent,
    FooterComponent,
    ListCommentairesBackComponent,
    AddOffersBackComponent,
    ListOffersBackComponent,
    ListCandidacyComponent,
  ListCandidacy1Component,
  Update1CandidacyBack1Component,
    AddCandidacyComponent,
    UpdateCandidacyComponent,
    QrcodeComponent,
    VideochatComponent,
    VideochatPageComponent,
    AddResultComponent,
    ListResultComponent,
    DeleteResultComponent,
    Update1CandidacyComponent,
    Update1CandidacyBackComponent,
    ListResultBackComponent,
    AddResultBackComponent,
    StatistiquesComponent,
    AddOffersComponent,
    UpdateOffersComponent,
    UpdateCommentairesComponent,
    ListCommentairesComponent,
    AddCommentairesComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    ForgetpasswordComponent,
    EditprofileComponent,
    UploadimageComponent,
    ListusersComponent,
    UpdateOffersBackComponent,
    AccommodationListComponent,
    AccommodationAddComponent,
    AccommodationDetailComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    ClaimModule, 
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

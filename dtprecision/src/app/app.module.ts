import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user/user.component";
import { HomepageComponent } from "./user/homepage/homepage.component";
import { ProfileComponent } from "./user/profile/profile.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCar,
  faUserAstronaut,
  faSignature,
  faAt,
  faUnlock,
  faLock,
  faMapMarkedAlt,
  faCarAlt,
  faKey,
  faUserTie,
  faWrench,
  faUpload,
  faClipboardList,
  faPuzzlePiece,
  faCommentDots,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import { OfferComponent } from "./user/offer/offer.component";
import { ListComponent } from "./user/offer/list/list.component";
import { AddComponent } from "./user/offer/add/add.component";
import { OffersComponent } from "./offers/offers.component";
import { FilterPipe } from "./filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserComponent,
    HomepageComponent,
    ProfileComponent,
    OfferComponent,
    ListComponent,
    AddComponent,
    OffersComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add({
      faCar,
      faUserAstronaut,
      faSignature,
      faAt,
      faUnlock,
      faLock,
      faMapMarkedAlt,
      faCarAlt,
      faKey,
      faUserTie,
      faWrench,
      faUpload,
      faClipboardList,
      faPuzzlePiece,
      faCommentDots,
      faDollarSign
    });
  }
}

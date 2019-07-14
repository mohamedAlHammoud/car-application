import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { RegistrationComponent } from "../registration/registration.component";
import { ProfileComponent } from "../user/profile/profile.component";
import { HomepageComponent } from "../user/homepage/homepage.component";
import { OfferComponent } from "../user/offer/offer.component";
import { ListComponent } from "../user/offer/list/list.component";
import { AddComponent } from "../user/offer/add/add.component";
import { OffersComponent } from "../offers/offers.component";

const routes: Routes = [
  {
    path: "register",
    component: RegistrationComponent
  },
  {
    path: "offers",
    component: OffersComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "user",
    component: HomepageComponent,
    children: [
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "offer",
        component: OfferComponent,
        children: [
          {
            path: "add",
            component: AddComponent
          },
          {
            path: "list",
            component: ListComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

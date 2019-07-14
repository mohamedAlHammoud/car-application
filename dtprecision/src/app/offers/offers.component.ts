import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { OfferService } from "../offer.service";
import { Observable } from "rxjs";
import { Offer } from "../offer";
import { LoginService } from "../login.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.scss"]
})
export class OffersComponent implements OnInit {
  offers$: Observable<Offer[]>;
  offerStates = {};
  constructor(
    private formBuilder: FormBuilder,
    private OfferService: OfferService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.offers$ = this.OfferService.getAllOffers();
    this.offers$.subscribe(data => {
      data.map(offer => {
        this.offerStates[offer.id] = false;
      })
    })
    console.log(this.offerStates);
    
  }
  logout() {
    this.loginService.logout();
  }
}

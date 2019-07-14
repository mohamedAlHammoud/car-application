import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Offer } from "src/app/offer";
import { OfferService } from "src/app/offer.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  offers$: Observable<Offer[]>;

  userId = JSON.parse(sessionStorage.getItem("user")).id;

  constructor(private offerService: OfferService) {}

  ngOnInit() {
    this.offers$ = this.offerService.getOfferInfo(this.userId);
  }
}

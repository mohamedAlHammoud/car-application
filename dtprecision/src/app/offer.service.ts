import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Offer } from "./offer";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OfferService {
  private url = "http://localhost:9720/user/offer";
  private url1 = "http://localhost:9720/user/offer/display";
  private url2 = "http://localhost:9720/offers";
  constructor(private httpClient: HttpClient) {}

  postOfferInfo(formData: Offer): Observable<Offer> {
    return this.httpClient.post<Offer>(this.url, formData);
  }
  getOfferInfo(userId: String): Observable<Offer[]> {
    return this.httpClient.post<Offer[]>(this.url1, userId);
  }
  getAllOffers(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(this.url2);
  }
}

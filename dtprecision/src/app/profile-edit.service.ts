import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { User } from "./user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProfileEditService {
  private url = "http://localhost:9720/user/profile/update";
  private urlForPicture = "http://localhost:9720/user/profile/upload";
  constructor(private httpClient: HttpClient) {}

  postUser(formData: User): Observable<User> {
    let response;
    console.log(formData);

    return this.httpClient.put<User>(this.url, formData);
  }
  postUserPicture(id, image) {
    console.log(image);
    const idParam = new HttpParams().set("id", id);

    return this.httpClient.post(this.urlForPicture, image, {
      params: idParam
    });
  }
}

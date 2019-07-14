import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { UserLogin } from "./userLogin";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserLoginDataService {
  private url = "http://localhost:9720/user/profile";
  constructor(private httpClient: HttpClient) {}

  getUserInfo(userId: String): Observable<User> {
    return this.httpClient.post<User>(this.url, userId);
  }

  postUser(usernameOrEmail): Observable<UserLogin> {
    let response;

    this.httpClient
      .post<UserLogin>(this.url, usernameOrEmail)
      .subscribe(data => data);
    return response;
  }
}

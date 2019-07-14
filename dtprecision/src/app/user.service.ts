import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private url = "http://localhost:9720/register";
  constructor(private httpClient: HttpClient) {}

  postUser(formData: User): Observable<User>{
    let response;
    console.log(formData);
    
    this.httpClient
      .post<User>(this.url, formData)
      .subscribe(data => response = data);
    return response;
  }
}

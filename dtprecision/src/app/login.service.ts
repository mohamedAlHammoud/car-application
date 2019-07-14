import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserLogin } from './userLogin';
import { User } from './user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = "http://localhost:9720/login";
  constructor(private httpClient: HttpClient, private router: Router) { }
  logUserIn(formData: UserLogin): Observable<User> {
    // sessionStorage.setItem('user', JSON.stringify(formData));
    return this.httpClient
      .post<any>(this.url, formData);
  }
  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['login'])
  }
}
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";
import { UserLogin } from "src/app/userLogin";
import { UserLoginDataService } from "src/app/user-login-data.service";
import { LoginService } from "src/app/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  formGroup: FormGroup;
  isValid = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.loginService.logout();
  }
}

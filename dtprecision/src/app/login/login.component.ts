import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";
import { UserLogin } from "../userLogin";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  isValid = false;
  success = false;
  users$: Observable<UserLogin>;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      usernameOrEmail: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.formGroup.valueChanges.subscribe(
      () => (this.isValid = this.formGroup.valid)
    );
  }
  logUserIn() {
    if (this.formGroup.valid) {
      this.loginService.logUserIn(this.formGroup.value).subscribe(
        data => {
          sessionStorage.setItem("user", JSON.stringify(data));
          this.router.navigate(["/user"]);
        },
        exception => {
          console.log(exception.error);
          sessionStorage.clear();
        }
      );
    }
  }
  
}

import { Component, OnInit, EventEmitter, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { User } from "../user";
import { Observable } from "rxjs";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  formGroup: FormGroup;
  isValid = false;
  errors: object;
  users$: Observable<User>;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      username: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: [
        "",
        [Validators.required, this.matchPassword.bind(this)]
      ],
      address: this.formBuilder.group({
        country: ["", [Validators.required, Validators.minLength(2)]],
        state: ["", [Validators.required, Validators.minLength(2)]]
      })
    });

    this.formGroup.valueChanges.subscribe(() => {
      this.isValid = this.formGroup.valid;
    });
  }

  addUserInfo() {
    if (this.formGroup.valid) {
      this.userService.postUser(this.formGroup.value);
      this.success = true;
      if (this.success === true) {
        this.router.navigate(["/login"]);
      }
    }
  }

  matchPassword(control: FormControl) {
    if (
      this.formGroup &&
      control.value !== this.formGroup.controls.password.value
    ) {
      return { passwordNotMatch: true };
    }
    return null;
  }
}

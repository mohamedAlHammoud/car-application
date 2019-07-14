import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Observable } from "rxjs";
import { UserLoginDataService } from "src/app/user-login-data.service";
import { User } from "src/app/user";
import { Router } from "@angular/router";
import { ProfileEditService } from "src/app/profile-edit.service";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  formGroup: FormGroup;
  formImage = new FormData();
  user$: Observable<User>;
  userId = JSON.parse(sessionStorage.getItem("user")).id;
  profileImage = !!JSON.parse(
    sessionStorage.getItem(`user-${this.userId}-image`)
  )
    ? JSON.parse(sessionStorage.getItem(`user-${this.userId}-image`)).url
    : "";

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserLoginDataService,
    private router: Router,
    private userEditService: ProfileEditService
  ) {}

  ngOnInit() {
    this.user$ = this.userService.getUserInfo(this.userId);
    const activeUser = JSON.parse(sessionStorage.getItem("user"));

    this.formGroup = this.formBuilder.group({
      name: [activeUser.name, [Validators.minLength(2)]],
      username: [activeUser.username, [Validators.minLength(4)]],
      email: [activeUser.email, [Validators.email]],
      password: [null, [Validators.minLength(6)]],
      confirmPassword: [null, [this.matchPassword.bind(this)]],
      address: this.formBuilder.group({
        country: [activeUser.address.country, [Validators.minLength(2)]],
        state: [activeUser.address.state, [Validators.minLength(2)]],
        city: [activeUser.address.city, [Validators.minLength(2)]],
        streetName: [activeUser.address.streetName, [Validators.minLength(2)]],
        buildingNumber: [activeUser.address.buildingNumber],
        apartmentNumber: [activeUser.address.apartmentNumber],
        postalCode: [activeUser.address.postalCode]
      })
    });
  }

  updateUserInfo() {
    let update = this.formGroup.value;
    update.id = this.userId;
    if (this.formGroup.valid) {
      this.userEditService.postUser(update).subscribe(response => {
        sessionStorage.setItem("user", JSON.stringify(response));

        this.router.navigate(["/user"]);
      });
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
  processImage(ev) {
    const image = ev.target.files[0];
    this.formImage.append("image", image);
    return false;
  }
  postUserPicture() {
    this.userEditService
      .postUserPicture(this.userId, this.formImage)
      .subscribe(data => {
        sessionStorage.setItem(
          `user-${this.userId}-image`,
          JSON.stringify(data)
        );
      });
  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Offer } from "src/app/offer";
import { OfferService } from "src/app/offer.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  formGroup: FormGroup;
  formImage = new FormData();
  offers$: Observable<Offer>;

  userId = JSON.parse(sessionStorage.getItem("user")).id;
  success = false;
  constructor(
    private formBuilder: FormBuilder,
    private offerService: OfferService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: ["", [Validators.required]],
      message: ["", [Validators.required]],
      part_fits: [[""]],
      condition: ["", [Validators.required]],
      price: [""],
      location: ["", [Validators.required]]
    });
  }

  postOffer() {
    let postInfo = this.formGroup.value;
    postInfo.userID = this.userId;
    if (this.formGroup.valid) {
      this.offerService.postOfferInfo(postInfo).subscribe(
        data => {
          this.success = true;
          sessionStorage.setItem("offer", JSON.stringify(data));
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

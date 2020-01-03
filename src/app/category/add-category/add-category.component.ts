import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";

import { CommentService } from "../category.service";
import { Comment } from "../category.model";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.css"]
})
export class AddCategoryComponent implements OnInit {
  isLoading = false;

  form: FormGroup;

  constructor(
    public commentService: CommentService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // this.authStatusSub = this.authService
    //   .getAuthStatusListener()
    //   .subscribe(authStatus => {
    //     this.isLoading = false;
    //   });
    // this.form = new FormGroup({
    //   title: new FormControl(null, {
    //     validators: [Validators.required, Validators.minLength(3)]
    //   }),
    //   desk: new FormControl(null, { validators: [Validators.required] }),
    //   author: new FormControl(null, { validators: [Validators.required] }),
    // });
    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //   if (paramMap.has("postId")) {
    //     this.postId = paramMap.get("postId");
    //     this.isLoading = true;
    //   } else {
    //     this.postId = null;
    //   }
    // });
  }



  onSavePost() {
    // if (this.form.invalid) {
    //   return;
    // }
    // console.log('ssss', this.form.value);

    // this.isLoading = true;
    // this.commentService.addComment(
    //   this.form.value.title,
    //   this.form.value.desk,
    //   this.form.value.author,
    //   this.postId
    // );
    // this.form.reset();
  }


}

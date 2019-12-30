import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";

// import { PostsService } from "../comment.service";
import { Comment } from "../comment.model";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-add-comment",
  templateUrl:"./add-comment.component.html",
  styleUrls: ["./add-comment.component.css"]
})
export class AddComment implements OnInit, OnDestroy {
 
  private postId: string;
  private authStatusSub: Subscription;

  constructor(
    // public postsService: PostsService,
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
    //   content: new FormControl(null, { validators: [Validators.required] }),
    //   image: new FormControl(null, {
    //     validators: [Validators.required],
    //     asyncValidators: [mimeType]
    //   })
    // });
    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //   if (paramMap.has("postId")) {
    //     this.mode = "edit";
    //     this.postId = paramMap.get("postId");
    //     this.isLoading = true;
    //     this.postsService.getPost(this.postId).subscribe(postData => {
    //       this.isLoading = false;
    //       this.post = {
    //         id: postData._id,
    //         title: postData.title,
    //         content: postData.content,
    //         imagePath: postData.imagePath,
    //         status: postData.status,
    //         creator: postData.creator
    //       };
    //       this.form.setValue({
    //         title: this.post.title,
    //         content: this.post.content,
    //         image: this.post.imagePath
    //       });
    //     });
    //   } else {
    //     this.mode = "create";
    //     this.postId = null;
    //   }
    // });
  }

  // onImagePicked(event: Event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({ image: file });
  //   this.form.get("image").updateValueAndValidity();
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imagePreview = reader.result;
  //   };
  //   reader.readAsDataURL(file);
  // }

  // onSavePost() {
  //   if (this.form.invalid) {
  //     return;
  //   }
  //   this.isLoading = true;
  //   if (this.mode === "create") {
  //     this.postsService.addPost(
  //       this.form.value.title,
  //       this.form.value.content,
  //       this.checked,
  //       this.form.value.image,
  //     );
  //   } else {
  //     this.postsService.updatePost(
  //       this.postId,
  //       this.form.value.title,
  //       this.form.value.content,
  //       this.checked,
  //       this.form.value.image,
  //     );
  //   }
  //   this.form.reset();
  // }

  ngOnDestroy() {
    // this.authStatusSub.unsubscribe();
  }
  // check() {
  //   if (this.checked == "0") this.checked = "1"
  //   else this.checked = "0"
  // }
}

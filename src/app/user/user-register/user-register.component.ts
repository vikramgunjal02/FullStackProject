import { Component, OnInit } from "@angular/core";
import * as alertyfy from 'alertifyjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.css"],
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user: any = {}
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    //     this.registrationForm = new FormGroup({
    //       userName: new FormControl('vikram', Validators.required),
    //       email: new FormControl(null,[Validators.required, Validators.email]),
    //       password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //       cPassword: new FormControl(null, [Validators.required]),
    //       mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)])
    //     },

    // );
    this.createRegisterationForm();
  }

  createRegisterationForm() {
    this.registrationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        cPassword: [null, Validators.required],
        mobile: [null, Validators.required],

      },
      { Validators: this.passwordMatchingValidator }
    );
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get("password")?.value === fg.get("cPassword")?.value
      ? 1
      : { notMactched: true };
  }

  onSubmit() {
    console.log(this.registrationForm);
    this.user = Object.assign(this.user, this.registrationForm.value);
    localStorage.setItem('Users', JSON.stringify(this.user));
    this.registrationForm.reset();
  }
}

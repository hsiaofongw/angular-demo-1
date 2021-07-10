import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
  ) { }

  loginForm = this.formBuilder.group({
    email: ['', Validators.required ], password: ['', Validators.required ],
  });

  ngOnInit(): void {
  }

  login(): void {
    const { email, password } = this.loginForm.value;
  }

  goBack(): void {
    this.location.back();
  }

}

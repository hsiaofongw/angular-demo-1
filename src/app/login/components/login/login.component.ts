import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared-modules/user/services/user.service';
import { ITokenObject, IUserCredential } from '../../interface';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private loginService: LoginService,
    private userService: UserService,
  ) {}

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  login(): void {
    const credential: IUserCredential = {
      username: this.loginForm.value.email as string,
      password: this.loginForm.value.password as string,
    };

    this.loginService.login(credential).subscribe((tokenObject: ITokenObject) => {
      this.userService.login(tokenObject);
    });
  }

  goBack(): void {
    this.location.back();
  }
}

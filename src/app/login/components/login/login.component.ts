import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { timeout } from 'rxjs/operators';
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

  isWaiting = false;

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

    this.isWaiting = true;
    const waitingTimeOut = 30*1000;
    this.loginService.login(credential).pipe(
      timeout(waitingTimeOut),
    ).subscribe(
      (value: ITokenObject) => {
        this.userService.login(value);
        this.isWaiting = false;
      },

      (error: unknown) => {
        window.console.log(error);
        this.isWaiting = false;
      },
    );
  }

  goBack(): void {
    this.location.back();
  }
}

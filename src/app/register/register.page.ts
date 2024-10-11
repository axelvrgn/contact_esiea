import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  AuthenticationService,
  IUser,
} from '../core/services/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class RegisterPage implements OnInit {
  public registerForm = new FormGroup({
    fullname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  public onSignUp(): void {
    this.authenticationService
      .signInWithEmailAndPassword(this.registerForm.value as unknown as IUser)
      .then((user) => console.log(user))
      .catch((error) => console.error(error));
  }
}

import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../data-access/auth.service';

interface loginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}
@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styles: ``
})
export default class SignUp {
  private authService = inject(AuthService)
  private _router = inject(Router)
  form;

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group<loginForm>({
      email: this._formBuilder.nonNullable.control('', Validators.required),
      password: this._formBuilder.nonNullable.control('', Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.getRawValue();
    this.authService.signUp(email, password).subscribe({
      next: (response) => {
        this._router.navigate(['/dashboard'])
      },
      error: (error) => console.log(error)
    })
  }

  }

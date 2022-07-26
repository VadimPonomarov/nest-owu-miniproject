import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ApiAuthService} from '../../../services';
import {IUser} from '../../../interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private _apiService: ApiAuthService, private _router: Router) {
    this._createForm();
  }

  _createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, {
        nonNullable: true, validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10)
        ]
      }),
      email: new FormControl(null, {
        nonNullable: true, validators: [
          Validators.required,
          Validators.email
        ]
      }),
      password: new FormControl(null, {
        nonNullable: true, validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      }),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ])
    }, [this._checkPasswords]);
  };

  _checkPasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password?.value === confirmPassword?.value ? null : {notSame: true};
  }

  handleSubmit() {
    const dto = this.form.getRawValue();
    delete dto.confirmPassword;
    this._apiService.postRegistration(dto)
      .subscribe({
        next: () => {
          this._router.navigate(['auth', 'login']);
        },
        error: err => console.error(err)
      });
  }
}

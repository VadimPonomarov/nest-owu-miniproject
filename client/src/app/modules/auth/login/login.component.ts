import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiAuthService, LocalStorageService, StorageService} from '../../../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private _apiService: ApiAuthService,
              private _router: Router,
              private _store: StorageService,
              private _localStorageService: LocalStorageService) {
    this._createForm();
  }

  _createForm(): void {
    this.form = new FormGroup({
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
      })
    });
  };

  handleSubmit($event: SubmitEvent): void {
    $event.preventDefault();
    this._apiService.postLogin(this.form.getRawValue())
      .subscribe({
        next: (res) => {
          this._localStorageService.saveTokenPair(res);
          this._store.showWelcome.next(true);
          this._router.navigate(['auth']);
        },
        error: (err) => {
          console.error('something wrong occurred: ' + err);
        },
        complete: () => {
          console.log('done');
        }
      });
  }
}

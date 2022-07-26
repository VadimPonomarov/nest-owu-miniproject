import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../environments/environment';
import {ITokenPair, IUser} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  constructor(private _httpClient: HttpClient) {
  }

  postRegistration(userDto: IUser): Observable<IUser> {
    return this._httpClient
      .post<IUser>([environment.base_api_url, 'auth/register']
        .join('/'), userDto);
  }

  postLogin(userDto: Partial<IUser>): Observable<ITokenPair> {
    return this._httpClient
      .post<ITokenPair>([environment.base_api_url, 'auth/login']
        .join('/'), userDto);
  }

  postRefreshTokenPair(tokenDto: Partial<ITokenPair>): Observable<ITokenPair> {
    return this._httpClient
      .post<ITokenPair>([environment.base_api_url, 'auth/refresh']
        .join('/'), tokenDto);
  }

}

import {Injectable} from '@angular/core';
import {ITokenPair} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  saveTokenPair(tokenPair: ITokenPair): void {
    localStorage.setItem('my_api_refresh_token', JSON.stringify(tokenPair));
  }

  getTokenPair(): ITokenPair {
    const tokenPairJSON = localStorage.getItem('my_api_refresh_token');
    if (tokenPairJSON) {
      const {accessToken, refreshToken} = tokenPairJSON ? JSON.parse(tokenPairJSON) : '';
      return {accessToken, refreshToken};
    }
    return {accessToken: '', refreshToken: ''};
  }

  deleteTokenPair(): void {
    localStorage.removeItem('my_api_refresh_token');
  }
}

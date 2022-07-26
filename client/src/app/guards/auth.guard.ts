import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _localStore: LocalStorageService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!this._localStore.getTokenPair().refreshToken) {
      console.log(!!this._localStore.getTokenPair().refreshToken);
      return true;
    }
    alert('Before entering, you are supposed to be registered and logged in !!!');
    return false;
  }

}

import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {ApiAuthService, LocalStorageService} from '../services';
import {ITokenPair} from '../interfaces';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private _apiService: ApiAuthService, private _localStorageService: LocalStorageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const {accessToken, refreshToken} = this._localStorageService.getTokenPair() as ITokenPair;
    return next.handle(request.clone({setHeaders: {Authorization: `Bearer ${accessToken}`}}))
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {

            console.log(' all looks good');
            // http response status code
            console.log(event.status);
          }
        }, error => {
          // http response status code
          if (error.status === 401) {
            this._apiService.postRefreshTokenPair({refreshToken})
              .subscribe(res => {
                this._localStorageService.saveTokenPair(res);
                const {accessToken, refreshToken} = this._localStorageService.getTokenPair() as ITokenPair;
                return next.handle(request.clone({setHeaders: {Authorization: `Bearer ${accessToken}`}}));
              });
          }
          console.log('----response----');
          console.error('status code:');
          console.error(error.status);
          console.error(error.message);
          console.log('--- end of response---');

        })
      );
  }
}

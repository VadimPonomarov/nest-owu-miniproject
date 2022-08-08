import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {TokenService} from "../modules/token/token.service";

@Injectable()
export class RefreshGuard implements CanActivate {
    constructor(private _tokenService: TokenService) {
    }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        const {token} = req.cookies;
        return this._tokenService.findOne(token ? token : req.body.refreshToken)
            .then(res => res !== null);
    }
}

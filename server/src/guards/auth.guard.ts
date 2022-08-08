import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException
} from '@nestjs/common';
import {Observable} from 'rxjs';
import {JwtService} from "@nestjs/jwt";

import {TokenService} from "../modules/token/token.service";
import {config} from "../config";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _tokenService: TokenService,
                private _jwtService: JwtService) {
    }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        const header = req.headers.authorization;
        if (!header) {
            throw new UnauthorizedException();
        }
        const [bearer, token] = [...header.split(' ')];
        try {
            const res = (bearer === 'Bearer' && this._jwtService.verify(
                token,
                {
                    secret: config().token_secret
                }
            ));
            return res;
        } catch (e) {
            throw new UnauthorizedException();
        }
    }
}

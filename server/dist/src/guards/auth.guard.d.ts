import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from "@nestjs/jwt";
import { TokenService } from "../modules/token/token.service";
export declare class AuthGuard implements CanActivate {
    private _tokenService;
    private _jwtService;
    constructor(_tokenService: TokenService, _jwtService: JwtService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}

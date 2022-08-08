import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokenService } from "../modules/token/token.service";
export declare class RefreshGuard implements CanActivate {
    private _tokenService;
    constructor(_tokenService: TokenService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}

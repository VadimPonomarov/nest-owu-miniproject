import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { TokenService } from "../modules/token/token.service";
import { UserRoleService } from "../modules/user_role/user_role.service";
export declare class RoleGuard implements CanActivate {
    private _reflector;
    private _tokenService;
    private _userRoleService;
    constructor(_reflector: Reflector, _tokenService: TokenService, _userRoleService: UserRoleService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

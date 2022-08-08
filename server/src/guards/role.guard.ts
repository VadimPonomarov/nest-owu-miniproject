import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Reflector} from "@nestjs/core";

import {TokenService} from "../modules/token/token.service";
import {UserRoleService} from "../modules/user_role/user_role.service";


@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private _reflector: Reflector,
                private _tokenService: TokenService,
                private _userRoleService: UserRoleService) {
    }

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const roles = this._reflector.get<string[]>("roles", context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const {email} = await this._tokenService
            .isTokenValid(request.headers.authorization.split(" ")[1]) as { email: string } | any;
        return !!await this._userRoleService.findAllByEmail(email)
            .then(items => items.find(item => roles.includes(item.user_role)));

    }
}

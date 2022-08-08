"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const token_service_1 = require("../modules/token/token.service");
const user_role_service_1 = require("../modules/user_role/user_role.service");
let RoleGuard = class RoleGuard {
    constructor(_reflector, _tokenService, _userRoleService) {
        this._reflector = _reflector;
        this._tokenService = _tokenService;
        this._userRoleService = _userRoleService;
    }
    async canActivate(context) {
        const roles = this._reflector.get("roles", context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const { email } = await this._tokenService
            .isTokenValid(request.headers.authorization.split(" ")[1]);
        return !!await this._userRoleService.findAllByEmail(email)
            .then(items => items.find(item => roles.includes(item.user_role)));
    }
};
RoleGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        token_service_1.TokenService,
        user_role_service_1.UserRoleService])
], RoleGuard);
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map
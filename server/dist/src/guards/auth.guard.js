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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const token_service_1 = require("../modules/token/token.service");
const config_1 = require("../config");
let AuthGuard = class AuthGuard {
    constructor(_tokenService, _jwtService) {
        this._tokenService = _tokenService;
        this._jwtService = _jwtService;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const header = req.headers.authorization;
        if (!header) {
            throw new common_1.UnauthorizedException();
        }
        const [bearer, token] = [...header.split(' ')];
        try {
            const res = (bearer === 'Bearer' && this._jwtService.verify(token, {
                secret: (0, config_1.config)().token_secret
            }));
            return res;
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        jwt_1.JwtService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map
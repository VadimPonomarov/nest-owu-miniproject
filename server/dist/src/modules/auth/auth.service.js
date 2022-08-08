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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const token_service_1 = require("../token/token.service");
const user_service_1 = require("../user/user.service");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(_tokenService, _userService, _configService) {
        this._tokenService = _tokenService;
        this._userService = _userService;
        this._configService = _configService;
    }
    async registerUser(user) {
        try {
            const isRegistered = await this._userService.user({ email: user.email });
            return await this._userService.createUser(user);
        }
        catch (e) {
            throw new common_1.NotAcceptableException("Failure!!! User has not been registered");
        }
    }
    async loginUser(user) {
        try {
            const isRegistered = await this._userService.user({ email: user.email });
            const isPasswordOk = bcrypt.compareSync(user.password, isRegistered.password);
            if (!isPasswordOk) {
                throw new common_1.NotAcceptableException("Failure!!! User has not been logged in");
            }
            const tokenPair = await this._tokenService.getTokenPair(user);
            await this._tokenService.create({ token: tokenPair.refreshToken });
            return tokenPair;
        }
        catch (e) {
            throw new common_1.NotAcceptableException("Failure!!! User has not been logged in");
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        user_service_1.UserService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
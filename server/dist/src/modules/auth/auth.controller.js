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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const token_service_1 = require("../token/token.service");
const dto_1 = require("../token/dto");
const dto_2 = require("./dto");
const guards_1 = require("../../guards");
const entities_1 = require("../token/entities");
const dto_3 = require("../user/dto");
let AuthController = class AuthController {
    constructor(_authService, _tokenService) {
        this._authService = _authService;
        this._tokenService = _tokenService;
    }
    async refreshTokenPair(refreshTokenFromBody, request, res) {
        const { token } = request.cookies;
        this._tokenService.refreshTokenPair(token ? token : refreshTokenFromBody)
            .then((respData) => {
            res.cookie("token", respData.refreshToken, {
                httpOnly: true,
                sameSite: true
            });
            return res.send(respData);
        })
            .catch(err => res.send(err.response));
    }
    ;
    async registerUser(user, res) {
        await this._authService.registerUser(user)
            .then(user => res.send(user))
            .catch(err => res.send(err.response));
    }
    async login(userData, res) {
        await this._authService.loginUser(userData)
            .then((tokenPair) => {
            res.cookie("token", tokenPair.refreshToken, {
                httpOnly: true,
                sameSite: true
            });
            res.send(tokenPair);
        })
            .catch(err => res.status(err.status).json({ status: err.status, message: err.message }));
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        type: entities_1.TokenPair,
        status: common_1.HttpStatus.CREATED,
        description: "User was provided with refreshed tokenPair"
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Failure!!! Refreshed tokenPair was not provided"
        }`
    }),
    (0, swagger_1.ApiBody)({ type: dto_1.RefreshTokenPairDto }),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(guards_1.RefreshGuard),
    (0, common_1.Post)("refresh"),
    __param(0, (0, common_1.Body)("refreshToken")),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.RefreshToken, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokenPair", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        type: dto_3.CreateUserDto,
        status: common_1.HttpStatus.CREATED,
        description: "User has been registered"
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Failure!!! User has not been registered"
        }`
    }),
    (0, swagger_1.ApiBody)({ type: dto_2.LoginUserDto }),
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_3.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        type: entities_1.TokenPair,
        status: common_1.HttpStatus.CREATED,
        description: "User has been logged in"
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Failure!!! User has not been logged in"
        }`
    }),
    (0, swagger_1.ApiBody)({ type: dto_2.LoginUserDto }),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.LoginUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)("Auth"),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        token_service_1.TokenService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map
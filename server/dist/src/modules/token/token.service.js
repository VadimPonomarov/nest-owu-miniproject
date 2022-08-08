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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../core/prisma.service");
const config_1 = require("../../config");
let TokenService = class TokenService {
    constructor(_prismaService, _jwtService) {
        this._prismaService = _prismaService;
        this._jwtService = _jwtService;
    }
    async create(createTokenDto) {
        try {
            return await this._prismaService.token.create({ data: { token: createTokenDto.token } });
        }
        catch (e) {
            throw new common_1.NotAcceptableException("Such a User can't be created");
        }
    }
    async findOne(tokenData) {
        try {
            return await this._prismaService.token.findUnique({ where: { token: tokenData } });
        }
        catch (e) {
            throw new common_1.ForbiddenException();
        }
    }
    async remove(tokenData) {
        try {
            return await this._prismaService.token.delete({ where: { token: tokenData } });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    getTokenPair(user) {
        try {
            const payLoad = { name: user.name, email: user.email };
            const accessToken = this._jwtService.sign(payLoad, {
                secret: (0, config_1.config)().token_secret,
                expiresIn: "15m"
            });
            const refreshToken = this._jwtService.sign(payLoad, {
                secret: (0, config_1.config)().token_secret,
                expiresIn: "30d"
            });
            return { accessToken, refreshToken };
        }
        catch (e) {
            throw new common_1.ForbiddenException();
        }
    }
    async refreshTokenPair(refreshToken) {
        const tokenDAta = this._jwtService.verify(refreshToken, {
            secret: (0, config_1.config)().token_secret
        });
        if (!tokenDAta) {
            throw new common_1.ForbiddenException();
        }
        const { name, email } = tokenDAta;
        await this.findOne(refreshToken).then(token => {
            if (token.token === refreshToken) {
                this.remove(refreshToken);
            }
        });
        const newTokenPair = this.getTokenPair({ name, email });
        await this.create({ token: newTokenPair.refreshToken });
        return newTokenPair;
    }
    isTokenValid(tokenData) {
        try {
            return this._jwtService.verify(tokenData, {
                secret: (0, config_1.config)().token_secret
            });
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map
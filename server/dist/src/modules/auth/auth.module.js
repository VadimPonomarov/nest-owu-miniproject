"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_1 = require("@prisma/client");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../core/prisma.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const token_service_1 = require("../token/token.service");
const user_service_1 = require("../user/user.service");
const token_module_1 = require("../token/token.module");
const user_module_1 = require("../user/user.module");
const auth_guard_1 = require("../../guards/auth.guard");
const refresh_guard_1 = require("../../guards/refresh.guard");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [token_module_1.TokenModule, user_module_1.UserModule, client_1.PrismaClient, jwt_1.JwtModule],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            token_service_1.TokenService,
            user_service_1.UserService,
            config_1.ConfigService,
            prisma_service_1.PrismaService,
            jwt_1.JwtService,
            auth_guard_1.AuthGuard,
            refresh_guard_1.RefreshGuard
        ],
        exports: [auth_service_1.AuthService, auth_guard_1.AuthGuard]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map
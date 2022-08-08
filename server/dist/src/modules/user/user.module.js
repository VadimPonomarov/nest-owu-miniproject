"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const token_service_1 = require("../token/token.service");
const token_module_1 = require("../token/token.module");
const guards_1 = require("../../guards");
const user_role_service_1 = require("../user_role/user_role.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, prisma_service_1.PrismaService, guards_1.AuthGuard, guards_1.RoleGuard, token_service_1.TokenService, jwt_1.JwtService, user_role_service_1.UserRoleService],
        imports: [(0, common_1.forwardRef)(() => token_module_1.TokenModule)]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map
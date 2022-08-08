"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleModule = void 0;
const common_1 = require("@nestjs/common");
const user_role_service_1 = require("./user_role.service");
const user_role_controller_1 = require("./user_role.controller");
const prisma_service_1 = require("../../core/prisma.service");
const role_guard_1 = require("../../guards/role.guard");
const guards_1 = require("../../guards");
const token_service_1 = require("../token/token.service");
const jwt_1 = require("@nestjs/jwt");
let UserRoleModule = class UserRoleModule {
};
UserRoleModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_role_controller_1.UserRoleController],
        providers: [user_role_service_1.UserRoleService, prisma_service_1.PrismaService, role_guard_1.RoleGuard, guards_1.AuthGuard, token_service_1.TokenService, jwt_1.JwtService]
    })
], UserRoleModule);
exports.UserRoleModule = UserRoleModule;
//# sourceMappingURL=user_role.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma.service");
const role_service_1 = require("./role.service");
const role_controller_1 = require("./role.controller");
const role_guard_1 = require("../../guards/role.guard");
const token_service_1 = require("../token/token.service");
const token_module_1 = require("../token/token.module");
const jwt_1 = require("@nestjs/jwt");
const user_role_service_1 = require("../user_role/user_role.service");
let RoleModule = class RoleModule {
};
RoleModule = __decorate([
    (0, common_1.Module)({
        controllers: [role_controller_1.RoleController],
        providers: [role_service_1.RoleService, prisma_service_1.PrismaService, role_guard_1.RoleGuard, token_service_1.TokenService, jwt_1.JwtService, user_role_service_1.UserRoleService],
        imports: [token_module_1.TokenModule]
    })
], RoleModule);
exports.RoleModule = RoleModule;
//# sourceMappingURL=role.module.js.map
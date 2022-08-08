"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma.service");
const clinic_service_1 = require("./clinic.service");
const clinic_controller_1 = require("./clinic.controller");
const guards_1 = require("../../guards");
const jwt_1 = require("@nestjs/jwt");
const token_service_1 = require("../token/token.service");
const user_role_service_1 = require("../user_role/user_role.service");
let ClinicModule = class ClinicModule {
};
ClinicModule = __decorate([
    (0, common_1.Module)({
        controllers: [clinic_controller_1.ClinicController],
        providers: [clinic_service_1.ClinicService, prisma_service_1.PrismaService, guards_1.AuthGuard, guards_1.RoleGuard, token_service_1.TokenService, jwt_1.JwtService, user_role_service_1.UserRoleService]
    })
], ClinicModule);
exports.ClinicModule = ClinicModule;
//# sourceMappingURL=clinic.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModule = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("./doctor.service");
const prisma_service_1 = require("../../core/prisma.service");
const doctor_controller_1 = require("./doctor.controller");
const token_service_1 = require("../token/token.service");
const jwt_1 = require("@nestjs/jwt");
const user_role_service_1 = require("../user_role/user_role.service");
let DoctorModule = class DoctorModule {
};
DoctorModule = __decorate([
    (0, common_1.Module)({
        controllers: [doctor_controller_1.DoctorController],
        providers: [doctor_service_1.DoctorService, prisma_service_1.PrismaService, token_service_1.TokenService, jwt_1.JwtService, user_role_service_1.UserRoleService]
    })
], DoctorModule);
exports.DoctorModule = DoctorModule;
//# sourceMappingURL=doctor.module.js.map
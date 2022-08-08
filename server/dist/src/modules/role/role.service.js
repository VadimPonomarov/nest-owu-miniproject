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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma.service");
let RoleService = class RoleService {
    constructor(_prismaService) {
        this._prismaService = _prismaService;
    }
    async create(createRoleDto) {
        try {
            return await this._prismaService.role.create({
                data: createRoleDto
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async findAll() {
        try {
            return await this._prismaService.role.findMany();
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async findOne(roleName) {
        try {
            return await this._prismaService.role.findUnique({
                where: {
                    name: roleName
                }
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async update(roleName, updateRoleDto) {
        try {
            return await this._prismaService.role.update({
                where: {
                    name: roleName
                }, data: updateRoleDto
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async remove(roleName) {
        try {
            return await this._prismaService.role.delete({
                where: {
                    name: roleName
                }
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map
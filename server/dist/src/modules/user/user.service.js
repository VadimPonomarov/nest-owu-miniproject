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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma.service");
const bcrypt = require("bcryptjs");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async user(userWhereUniqueInput) {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }
    async users(params) {
        return await this.prisma.user.findMany(Object.assign(Object.assign({}, params), { include: {
                roles: true
            } }));
    }
    async createUser(data) {
        const bcryptedPassword = bcrypt.hashSync(data.password, 5);
        data = Object.assign(Object.assign({}, data), { password: bcryptedPassword });
        try {
            return await this.prisma.user.create({
                data,
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async updateUser(params) {
        const { where, data } = params;
        return this.prisma.user.update({
            data,
            where,
        });
    }
    async deleteUser(where) {
        return this.prisma.user.delete({
            where,
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
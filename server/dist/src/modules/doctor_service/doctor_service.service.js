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
exports.DoctorServiceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma.service");
let DoctorServiceService = class DoctorServiceService {
    constructor(_prismaService) {
        this._prismaService = _prismaService;
    }
    async create(createDoctorServiceDto) {
        try {
            return await this._prismaService.doctorService.create({
                data: createDoctorServiceDto
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async findAll() {
        try {
            return await this._prismaService.doctorService.findMany();
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async updateOne(doctorService, updateDoctorService) {
        try {
            return await this._prismaService.doctorService.update({
                where: {
                    doctorId_serviceId: doctorService
                },
                data: updateDoctorService
            });
        }
        catch (_a) {
            throw new common_1.BadRequestException();
        }
    }
    async removeOne(doctorService) {
        try {
            return await this._prismaService.doctorService.delete({
                where: {
                    doctorId_serviceId: doctorService
                }
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
};
DoctorServiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DoctorServiceService);
exports.DoctorServiceService = DoctorServiceService;
//# sourceMappingURL=doctor_service.service.js.map
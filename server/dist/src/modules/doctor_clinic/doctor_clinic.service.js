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
exports.DoctorClinicService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma.service");
let DoctorClinicService = class DoctorClinicService {
    constructor(_prismaService) {
        this._prismaService = _prismaService;
    }
    async create(createDoctorClinicDto) {
        try {
            return await this._prismaService.doctorClinic.create({
                data: createDoctorClinicDto
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async findAll() {
        try {
            return await this._prismaService.doctorClinic.findMany();
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async updateOne(doctorClinic, updateDoctorClinic) {
        try {
            return await this._prismaService.doctorClinic.update({
                where: {
                    doctorId_clinicId: doctorClinic
                },
                data: updateDoctorClinic
            });
        }
        catch (_a) {
            throw new common_1.BadRequestException();
        }
    }
    async removeOne(doctorClinic) {
        try {
            return await this._prismaService.doctorClinic.delete({
                where: {
                    doctorId_clinicId: doctorClinic
                }
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
};
DoctorClinicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DoctorClinicService);
exports.DoctorClinicService = DoctorClinicService;
//# sourceMappingURL=doctor_clinic.service.js.map
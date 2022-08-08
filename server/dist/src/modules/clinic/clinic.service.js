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
exports.ClinicService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma.service");
let ClinicService = class ClinicService {
    constructor(_prismaService) {
        this._prismaService = _prismaService;
    }
    async create(createClinicDto) {
        try {
            return await this._prismaService.clinic.create({
                data: createClinicDto
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async findAll() {
        try {
            return await this._prismaService.clinic.findMany();
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async findAllByServiceName(serviceId) {
        try {
            return await this._prismaService.$queryRaw `
            SELECT C."name" as "clinic", D."name" as "doctor", S."name" as "service" 
            FROM public."DoctorClinic" as DC
            JOIN (SELECT * FROM public."Doctor") as D 
            ON DC."doctorId" = D."id"
            JOIN (SELECT * FROM public."Clinic") as C 
            ON DC."clinicId" = C."id"
            JOIN (SELECT * FROM public."Service") as S 
            ON ${serviceId} = S."id"
            WHERE DC."doctorId" IN (
                    SELECT DS."doctorId" 
                    FROM public."DoctorService" as DS 
                    WHERE DS."serviceId" = ${serviceId}
                ) 
                ORDER BY C."name" ASC, D."name" ASC
            `;
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async findOne(id) {
        try {
            return await this._prismaService.clinic.findUnique({
                where: {
                    id
                }
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async update(id, updateClinicDto) {
        try {
            return await this._prismaService.clinic.update({
                where: {
                    id
                },
                data: updateClinicDto
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async remove(id) {
        try {
            return await this._prismaService.clinic.delete({
                where: {
                    id
                }
            });
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
};
ClinicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClinicService);
exports.ClinicService = ClinicService;
//# sourceMappingURL=clinic.service.js.map
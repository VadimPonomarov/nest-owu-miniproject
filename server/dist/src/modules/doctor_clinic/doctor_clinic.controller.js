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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorClinicController = void 0;
const common_1 = require("@nestjs/common");
const doctor_clinic_service_1 = require("./doctor_clinic.service");
const dto_1 = require("./dto");
const decorators_1 = require("../../decorators");
const swagger_1 = require("@nestjs/swagger");
const guards_1 = require("../../guards");
let DoctorClinicController = class DoctorClinicController {
    constructor(doctorClinicService) {
        this.doctorClinicService = doctorClinicService;
    }
    create(createDoctorClinicDto) {
        return this.doctorClinicService.create(createDoctorClinicDto)
            .catch(err => err);
    }
    findAll() {
        return this.doctorClinicService.findAll()
            .catch(err => err);
    }
    update(doctorClinic, updateDoctorClinicDto) {
        return this.doctorClinicService.updateOne(doctorClinic, updateDoctorClinicDto)
            .catch(err => err);
    }
    remove(doctorClinic) {
        return this.doctorClinicService.removeOne(doctorClinic)
            .catch(err => err);
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        type: dto_1.CreateDoctorClinicDto,
        status: common_1.HttpStatus.CREATED,
        description: "Success !!! Record Doctor-Clinic has been created"
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad Request"
        }`
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"
            }`
    }),
    (0, decorators_1.Role)("admin"),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateDoctorClinicDto]),
    __metadata("design:returntype", Promise)
], DoctorClinicController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateDoctorClinicDto,
        isArray: true,
        status: common_1.HttpStatus.OK,
        description: "List of Doctor-Clinic records"
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad Request"
        }`
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"
            }`
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorClinicController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateDoctorClinicDto,
        status: common_1.HttpStatus.OK,
        description: "Doctor-Clinic entity"
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad Request"
        }`
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"
            }`
    }),
    (0, decorators_1.Role)("admin"),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateDoctorClinicDto,
        dto_1.UpdateDoctorClinicDto]),
    __metadata("design:returntype", Promise)
], DoctorClinicController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateDoctorClinicDto,
        status: common_1.HttpStatus.OK,
        description: "Doctor-Clinic entity"
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad Request"
        }`
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"
            }`
    }),
    (0, decorators_1.Role)("admin"),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateDoctorClinicDto]),
    __metadata("design:returntype", Promise)
], DoctorClinicController.prototype, "remove", null);
DoctorClinicController = __decorate([
    (0, swagger_1.ApiTags)("Doctor-Clinic"),
    (0, swagger_1.ApiBearerAuth)("accessToken"),
    (0, common_1.UseGuards)(guards_1.AuthGuard, guards_1.RoleGuard),
    (0, common_1.Controller)("doctor-clinic"),
    __metadata("design:paramtypes", [doctor_clinic_service_1.DoctorClinicService])
], DoctorClinicController);
exports.DoctorClinicController = DoctorClinicController;
//# sourceMappingURL=doctor_clinic.controller.js.map
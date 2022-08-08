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
exports.DoctorServiceController = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_service_1 = require("./doctor_service.service");
const dto_1 = require("./dto");
const decorators_1 = require("../../decorators");
const swagger_1 = require("@nestjs/swagger");
const guards_1 = require("../../guards");
let DoctorServiceController = class DoctorServiceController {
    constructor(doctorServiceService) {
        this.doctorServiceService = doctorServiceService;
    }
    create(createDoctorServiceDto) {
        return this.doctorServiceService.create(createDoctorServiceDto)
            .catch(err => err);
    }
    findAll() {
        return this.doctorServiceService.findAll()
            .catch(err => err);
    }
    update(doctorService, updateDoctorServiceDto) {
        return this.doctorServiceService.updateOne(doctorService, updateDoctorServiceDto);
    }
    remove(doctorService) {
        return this.doctorServiceService.removeOne(doctorService)
            .catch(err => err);
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        type: dto_1.CreateDoctorServiceDto,
        status: common_1.HttpStatus.CREATED,
        description: "Success !!! Record Doctor-Service has been created"
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
    __metadata("design:paramtypes", [dto_1.CreateDoctorServiceDto]),
    __metadata("design:returntype", Promise)
], DoctorServiceController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateDoctorServiceDto,
        isArray: true,
        status: common_1.HttpStatus.OK,
        description: "List of Doctor-Service records"
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
], DoctorServiceController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateDoctorServiceDto,
        status: common_1.HttpStatus.OK,
        description: "Doctor-Service entity"
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
    __metadata("design:paramtypes", [dto_1.CreateDoctorServiceDto,
        dto_1.UpdateDoctorServiceDto]),
    __metadata("design:returntype", Promise)
], DoctorServiceController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateDoctorServiceDto,
        status: common_1.HttpStatus.OK,
        description: "Doctor-Service entity"
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
    __metadata("design:paramtypes", [dto_1.CreateDoctorServiceDto]),
    __metadata("design:returntype", Promise)
], DoctorServiceController.prototype, "remove", null);
DoctorServiceController = __decorate([
    (0, swagger_1.ApiTags)("Doctor-Service"),
    (0, swagger_1.ApiBearerAuth)("accessToken"),
    (0, common_1.UseGuards)(guards_1.AuthGuard, guards_1.RoleGuard),
    (0, common_1.Controller)("doctor-service"),
    __metadata("design:paramtypes", [doctor_service_service_1.DoctorServiceService])
], DoctorServiceController);
exports.DoctorServiceController = DoctorServiceController;
//# sourceMappingURL=doctor_service.controller.js.map
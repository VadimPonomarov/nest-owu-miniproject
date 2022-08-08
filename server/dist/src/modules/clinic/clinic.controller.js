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
exports.ClinicController = void 0;
const common_1 = require("@nestjs/common");
const clinic_service_1 = require("./clinic.service");
const swagger_1 = require("@nestjs/swagger");
const guards_1 = require("../../guards");
const dto_1 = require("./dto");
const decorators_1 = require("../../decorators");
const entities_1 = require("./entities");
let ClinicController = class ClinicController {
    constructor(clinicService) {
        this.clinicService = clinicService;
    }
    create(createClinicDto) {
        return this.clinicService
            .create(createClinicDto)
            .catch(err => err);
    }
    findAll() {
        return this.clinicService.findAll()
            .catch(err => err);
    }
    findAllByServiceName(id) {
        return this.clinicService
            .findAllByServiceName(+id)
            .catch(err => err);
    }
    findOne(id) {
        return this.clinicService.findOne(+id)
            .catch(err => err);
    }
    update(id, updateClinicDto) {
        return this.clinicService
            .update(+id, updateClinicDto)
            .catch(err => err);
    }
    remove(id) {
        return this.clinicService.remove(+id)
            .catch(err => err);
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        type: dto_1.CreateClinicDto,
        status: common_1.HttpStatus.CREATED,
        description: "Success !!! Clinic has been created"
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
    __metadata("design:paramtypes", [dto_1.CreateClinicDto]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateClinicDto,
        isArray: true,
        status: common_1.HttpStatus.OK,
        description: "List of clinics"
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
], ClinicController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: entities_1.ClinicServiceResponse,
        isArray: true,
        status: common_1.HttpStatus.OK,
        description: "List of clinics"
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
    (0, swagger_1.ApiParam)({
        name: "id",
        description: "Service iD",
        type: String,
        required: true,
        example: "1"
    }),
    (0, common_1.Get)("service/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "findAllByServiceName", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateClinicDto,
        status: common_1.HttpStatus.OK,
        description: "Success !!! Clinic entity"
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
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.UpdateClinicDto,
        status: common_1.HttpStatus.OK,
        description: "Clinic hase been updated"
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
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateClinicDto]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateClinicDto,
        status: common_1.HttpStatus.OK,
        description: "Clinic has been deleted"
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
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "remove", null);
ClinicController = __decorate([
    (0, swagger_1.ApiTags)("Clinics"),
    (0, common_1.UseGuards)(guards_1.AuthGuard, guards_1.RoleGuard),
    (0, common_1.Controller)("clinics"),
    __metadata("design:paramtypes", [clinic_service_1.ClinicService])
], ClinicController);
exports.ClinicController = ClinicController;
//# sourceMappingURL=clinic.controller.js.map
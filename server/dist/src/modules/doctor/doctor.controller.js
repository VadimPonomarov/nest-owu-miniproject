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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("./doctor.service");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const guards_1 = require("../../guards");
const decorators_1 = require("../../decorators");
let DoctorController = class DoctorController {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    create(createDoctorDto) {
        return this.doctorService.create(createDoctorDto)
            .catch(err => err);
    }
    findAll() {
        return this.doctorService.findAll()
            .catch(err => err);
    }
    findOne(id) {
        return this.doctorService.findOne(+id)
            .catch(err => err);
    }
    update(id, updateDoctorDto) {
        return this.doctorService.update(+id, updateDoctorDto)
            .catch(err => err);
    }
    remove(id) {
        return this.doctorService.remove(+id)
            .catch(err => err);
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        type: dto_1.CreateDoctorDto,
        status: common_1.HttpStatus.CREATED,
        description: "Success !!! Doctor has been created"
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
    __metadata("design:paramtypes", [dto_1.CreateDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateDoctorDto,
        isArray: true,
        status: common_1.HttpStatus.OK,
        description: "List of doctors"
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
], DoctorController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateDoctorDto,
        status: common_1.HttpStatus.OK,
        description: "Success !!! Doctor entity"
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
], DoctorController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateDoctorDto,
        status: common_1.HttpStatus.OK,
        description: "Doctor hase been updated"
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
    __metadata("design:paramtypes", [String, dto_1.UpdateDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiDefaultResponse)({
        type: dto_1.CreateDoctorDto,
        status: common_1.HttpStatus.OK,
        description: "Doctor has been deleted"
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
], DoctorController.prototype, "remove", null);
DoctorController = __decorate([
    (0, swagger_1.ApiTags)("Doctors"),
    (0, common_1.UseGuards)(guards_1.AuthGuard, guards_1.RoleGuard),
    (0, common_1.Controller)("doctors"),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], DoctorController);
exports.DoctorController = DoctorController;
//# sourceMappingURL=doctor.controller.js.map
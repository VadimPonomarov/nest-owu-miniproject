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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const role_service_1 = require("./role.service");
const dto_1 = require("./dto");
const swagger_1 = require("@nestjs/swagger");
const guards_1 = require("../../guards");
const decorators_1 = require("../../decorators");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    create(createRoleDto) {
        return this.roleService.create(createRoleDto)
            .catch(err => err);
    }
    findAll() {
        return this.roleService.findAll()
            .catch(err => err);
    }
    findOne(roleName) {
        return this.roleService.findOne(roleName)
            .catch(err => err);
    }
    update(roleName, updateRoleDto) {
        return this.roleService.update(roleName, updateRoleDto)
            .catch(err => err);
    }
    remove(roleName) {
        return this.roleService.remove(roleName)
            .catch(err => err);
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        type: dto_1.CreateRoleDto,
        status: common_1.HttpStatus.CREATED,
        description: "Success !!! Role has been created"
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
    __metadata("design:paramtypes", [dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateRoleDto,
        isArray: true,
        status: common_1.HttpStatus.OK,
        description: "List of Roles"
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
], RoleController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateRoleDto,
        status: common_1.HttpStatus.OK,
        description: "Success !!! Role entity"
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
    (0, common_1.Get)(":roleName"),
    __param(0, (0, common_1.Param)("roleName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateRoleDto,
        status: common_1.HttpStatus.OK,
        description: "Role hase been altered"
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
    (0, common_1.Patch)(":roleName"),
    __param(0, (0, common_1.Param)("roleName")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiDefaultResponse)({
        type: dto_1.CreateRoleDto,
        status: common_1.HttpStatus.OK,
        description: "Role has been deleted"
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
    (0, common_1.Delete)(":roleName"),
    __param(0, (0, common_1.Param)("roleName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "remove", null);
RoleController = __decorate([
    (0, swagger_1.ApiTags)("Roles"),
    (0, swagger_1.ApiBearerAuth)("accessToken"),
    (0, common_1.UseGuards)(guards_1.RoleGuard, guards_1.AuthGuard),
    (0, common_1.Controller)("roles"),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map
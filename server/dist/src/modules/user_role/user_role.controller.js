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
exports.UserRoleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_role_service_1 = require("./user_role.service");
const dto_1 = require("./dto");
const guards_1 = require("../../guards");
const decorators_1 = require("../../decorators");
let UserRoleController = class UserRoleController {
    constructor(userRoleService) {
        this.userRoleService = userRoleService;
    }
    create(createUserRoleDto) {
        return this.userRoleService.create(createUserRoleDto)
            .catch(err => err);
    }
    findAll() {
        return this.userRoleService.findAll()
            .catch(err => err);
    }
    findAllByEmail(email) {
        return this.userRoleService.findAllByEmail(email)
            .catch(err => err);
    }
    updateOne(userRole, updateUserRoleDto) {
        return this.userRoleService.updateOne(userRole, updateUserRoleDto)
            .catch(err => err);
    }
    remove(userRole) {
        return this.userRoleService.removeOne(userRole)
            .catch(err => err);
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        type: dto_1.CreateUserRoleDto,
        status: common_1.HttpStatus.CREATED,
        description: "Success !!! Record User-Role has been created"
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
    __metadata("design:paramtypes", [dto_1.CreateUserRoleDto]),
    __metadata("design:returntype", Promise)
], UserRoleController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateUserRoleDto,
        isArray: true,
        status: common_1.HttpStatus.OK,
        description: "List of User-Role records"
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
], UserRoleController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateUserRoleDto,
        isArray: true,
        status: common_1.HttpStatus.OK,
        description: "List of User-Role records"
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
    (0, swagger_1.ApiParam)({ name: "email", example: "admin@gmail.com" }),
    (0, common_1.Get)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserRoleController.prototype, "findAllByEmail", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateUserRoleDto,
        status: common_1.HttpStatus.OK,
        description: "User-Role entity"
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
    __metadata("design:paramtypes", [dto_1.CreateUserRoleDto,
        dto_1.UpdateUserRoleDto]),
    __metadata("design:returntype", Promise)
], UserRoleController.prototype, "updateOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.CreateUserRoleDto,
        status: common_1.HttpStatus.OK,
        description: "User-Role entity"
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
    __metadata("design:paramtypes", [dto_1.CreateUserRoleDto]),
    __metadata("design:returntype", Promise)
], UserRoleController.prototype, "remove", null);
UserRoleController = __decorate([
    (0, swagger_1.ApiTags)("User-Role"),
    (0, swagger_1.ApiBearerAuth)("accessToken"),
    (0, common_1.UseGuards)(guards_1.RoleGuard, guards_1.AuthGuard),
    (0, decorators_1.Role)("admin"),
    (0, common_1.Controller)("user-role"),
    __metadata("design:paramtypes", [user_role_service_1.UserRoleService])
], UserRoleController);
exports.UserRoleController = UserRoleController;
//# sourceMappingURL=user_role.controller.js.map
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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const dto_1 = require("./dto");
const guards_1 = require("../../guards");
const decorators_1 = require("../../decorators");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(user) {
        return this.userService.createUser(user);
    }
    findAll(query) {
        return this.userService.users(Object.assign(Object.assign({}, query), { take: +(query === null || query === void 0 ? void 0 : query.take) || undefined, skip: +(query === null || query === void 0 ? void 0 : query.skip) || undefined, orderBy: JSON.parse((query === null || query === void 0 ? void 0 : query.orderBy) ? query === null || query === void 0 ? void 0 : query.orderBy : "{\"id\":\"asc\"}"), where: JSON.parse((query === null || query === void 0 ? void 0 : query.where) ? query === null || query === void 0 ? void 0 : query.where : "{\"id\": {\"not\": 0}}") }));
    }
    findOne(data) {
        return this.userService.user({
            email: data
        });
    }
    update(data, updateUserDto) {
        return this.userService.updateUser({
            where: { email: data },
            data: updateUserDto
        });
    }
    remove(data) {
        return this.userService.deleteUser({
            email: data
        });
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.CREATED,
        type: dto_1.CreateUserDto,
        isArray: false,
        description: "User has been successfully created"
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        isArray: false,
        description: `{
            "statusCode": 400,
            "message": "Bad Request"
        }`,
    }),
    (0, decorators_1.Role)("admin"),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: "skip",
        required: false,
        type: Number,
        example: "10",
        description: "Offset pagination to skip a certain number of results"
    }),
    (0, swagger_1.ApiQuery)({
        name: "take",
        required: false,
        type: Number,
        example: "10",
        description: "Select a limited range of results"
    }),
    (0, swagger_1.ApiQuery)({
        name: "cursor",
        required: false,
        example: { "id": "10" },
        description: "A cursor bookmarks your location in a result set and must be a unique, sequential column - such as an ID or a timestamp"
    }),
    (0, swagger_1.ApiQuery)({
        name: "orderBy",
        required: false,
        example: { "email": "desc" },
        description: "Ordering results using condition"
    }),
    (0, swagger_1.ApiQuery)({
        name: "where",
        required: false,
        example: { "email": { "contains": "@" } },
        description: "Filtering results using conditions.<br><br><hr>" + `
            equals: string;<br>
            in: string[] | Number[];<br>
            notIn: string[] | Number[];<br>
            lt: string;<br>
            lte: string;<br>
            gt: string;<br>
            gte: string;<br>
            contains: string;<br>
            startsWith: string;<br>
            endsWith: string;<br>
            mode: string;<br>
            not: string;<br>
        `
    }),
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        type: dto_1.CreateUserDto,
        isArray: true,
        description: "List of all users"
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"
            }`
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad request"}`
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        type: dto_1.CreateUserDto,
        isArray: false,
        description: "User found by email"
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"}`
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad request"}`
    }),
    (0, swagger_1.ApiParam)({
        name: "email",
        type: String,
        example: "qwerty.123@gmail.com",
        description: "Unique email to be found"
    }),
    (0, common_1.Get)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        type: dto_1.CreateUserDto,
        description: "User data has been altered"
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"}`
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad request"}`
    }),
    (0, decorators_1.Role)("admin"),
    (0, common_1.Patch)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        type: dto_1.CreateUserDto,
        description: "User has been deleted"
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"}`
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad request"}`
    }),
    (0, decorators_1.Role)("admin"),
    (0, common_1.Delete)(":email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)("Users"),
    (0, swagger_1.ApiBearerAuth)("accessToken"),
    (0, common_1.UseGuards)(guards_1.AuthGuard, guards_1.RoleGuard),
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: "Unique iD, set as an autoincrement",
        type: Number,
        example: "111",
        required: false,
        uniqueItems: true,
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        description: "Email address",
        type: String,
        example: "qwerty.123@gmail.com",
        uniqueItems: true,
        required: true
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Length)(2, 10),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: "Nik name of User",
        type: String,
        name: "name",
        minLength: 2,
        maxLength: 10,
        example: "Vadim",
        uniqueItems: false,
        required: true
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User password",
        type: String,
        example: "qwerty1234",
        minLength: 2,
        maxLength: 10
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 10),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map
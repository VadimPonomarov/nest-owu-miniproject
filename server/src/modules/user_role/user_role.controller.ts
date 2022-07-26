import {Controller, Get, Post, Body, Patch, Delete, UseGuards, HttpStatus, Param} from "@nestjs/common";
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiCreatedResponse, ApiOkResponse, ApiParam,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";

import {UserRoleService} from "./user_role.service";
import {CreateUserRoleDto, UpdateUserRoleDto} from "./dto";
import {UserRole} from "./entities";
import {AuthGuard, RoleGuard} from "../../guards";
import {Role} from "../../decorators";
import {DoctorClinic} from "../doctor_clinic/entities";


@ApiTags("User-Role")
@ApiBearerAuth("accessToken")
@UseGuards(RoleGuard, AuthGuard)
@Role("admin")
@Controller("user-role")
export class UserRoleController {

    constructor(private readonly userRoleService: UserRoleService) {
    }

    /*------------------------------------------*/

    @ApiCreatedResponse({
        type: UserRole,
        status: HttpStatus.CREATED,
        description: "Success !!! Record User-Role has been created"
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad Request"
        }`
    })
    @ApiUnauthorizedResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"
            }`
    })
    @Role("admin")
    @Post()
    create(@Body() createUserRoleDto: CreateUserRoleDto): Promise<UserRole> {
        return this.userRoleService.create(createUserRoleDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: UserRole,
        isArray: true,
        status: HttpStatus.OK,
        description: "List of User-Role records"
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad Request"
        }`
    })
    @ApiUnauthorizedResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"
            }`
    })
    @Get()
    findAll(): Promise<UserRole> {
        return this.userRoleService.findAll()
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: UserRole,
        isArray: true,
        status: HttpStatus.OK,
        description: "List of User-Role records"
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad Request"
        }`
    })
    @ApiUnauthorizedResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"
            }`
    })
    @ApiParam({name: "email", example: "admin@gmail.com"})
    @Get(":email")
    findAllByEmail(@Param("email") email: string): Promise<UserRole[]> {
        return this.userRoleService.findAllByEmail(email)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: UserRole,
        status: HttpStatus.OK,
        description: "User-Role entity"
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad Request"
        }`
    })
    @ApiUnauthorizedResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"
            }`
    })
    @Role("admin")
    @Patch()
    updateOne(@Body() userRole: UserRole,
              @Body() updateUserRoleDto: UpdateUserRoleDto): Promise<UserRole> {
        return this.userRoleService.updateOne(userRole, updateUserRoleDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: UserRole,
        status: HttpStatus.OK,
        description: "User-Role entity"
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad Request"
        }`
    })
    @ApiUnauthorizedResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"
            }`
    })
    @Role("admin")
    @Delete()
    remove(@Body() userRole: UserRole): Promise<UserRole> {
        return this.userRoleService.removeOne(userRole)
            .catch(err => err);
    }
}

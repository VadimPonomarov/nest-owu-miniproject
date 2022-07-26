import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpStatus} from "@nestjs/common";

import {RoleService} from "./role.service";
import {CreateRoleDto, UpdateRoleDto} from "./dto";
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiCreatedResponse, ApiDefaultResponse, ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import {AuthGuard, RoleGuard} from "../../guards";
import {Role} from "./entities";
import {Role as RoleDecorator} from "../../decorators";

@ApiTags("Roles")
@ApiBearerAuth("accessToken")
@UseGuards(RoleGuard, AuthGuard)
@Controller("roles")
export class RoleController {

    constructor(private readonly roleService: RoleService) {
    }

    /*------------------------------------------*/

    @ApiCreatedResponse({
        type: Role,
        status: HttpStatus.CREATED,
        description: "Success !!! Role has been created"
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
    @RoleDecorator("admin")
    @Post()
    create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
        return this.roleService.create(createRoleDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: CreateRoleDto,
        isArray: true,
        status: HttpStatus.OK,
        description: "List of Roles"
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
    findAll(): Promise<Role[]> {
        return this.roleService.findAll()
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: Role,
        status: HttpStatus.OK,
        description: "Success !!! Role entity"
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
    @Get(":roleName")
    findOne(@Param("roleName") roleName: string): Promise<Role> {
        return this.roleService.findOne(roleName)
            .catch(err => err);
    }

    /*------------------------------------------*/


    @ApiOkResponse({
        type: Role,
        status: HttpStatus.OK,
        description: "Role hase been altered"
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
    @RoleDecorator("admin")
    @Patch(":roleName")
    update(@Param("roleName") roleName: string,
           @Body() updateRoleDto: UpdateRoleDto): Promise<Role> {
        return this.roleService.update(roleName, updateRoleDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiDefaultResponse({
        type: Role,
        status: HttpStatus.OK,
        description: "Role has been deleted"
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
    @RoleDecorator("admin")
    @Delete(":roleName")
    remove(@Param("roleName") roleName: string): Promise<Role> {
        return this.roleService.remove(roleName)
            .catch(err => err);
    }
}

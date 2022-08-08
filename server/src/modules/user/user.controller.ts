import {
    Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, UseGuards, Query
} from "@nestjs/common";
import {
    ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse
} from "@nestjs/swagger";

import {UserService} from "./user.service";
import {CreateUserDto, UpdateUserDto} from "./dto";
import {AuthGuard, RoleGuard} from "../../guards";
import {Role} from "../../decorators";

@ApiTags("Users")
@ApiBearerAuth("accessToken")
@UseGuards(AuthGuard, RoleGuard)
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    /*--------------------------------------------------------*/


    @ApiOkResponse({
        status: HttpStatus.CREATED,
        type: CreateUserDto,
        isArray: false,
        description: "User has been successfully created"
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        isArray: false,
        description: `{
            "statusCode": 400,
            "message": "Bad Request"
        }`,
    })
    @Role("admin")
    @Post()
    create(@Body() user: CreateUserDto): Promise<CreateUserDto> {
        return this.userService.createUser(user);
    }

    /*--------------------------------------------------------*/

    @ApiQuery({
        name: "skip",
        required: false,
        type: Number,
        example: "10",
        description: "Offset pagination to skip a certain number of results"
    })
    @ApiQuery({
        name: "take",
        required: false,
        type: Number,
        example: "10",
        description: "Select a limited range of results"
    })
    @ApiQuery({
        name: "cursor",
        required: false,
        example: {"id": "10"},
        description: "A cursor bookmarks your location in a result set and must be a unique, sequential column - such as an ID or a timestamp"
    })
    @ApiQuery({
        name: "orderBy",
        required: false,
        example: {"email": "desc"},
        description: "Ordering results using condition"
    })
    @ApiQuery({
        name: "where",
        required: false,
        example: {"email": {"contains": "@"}},
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
    })

    @ApiOkResponse({
        status: HttpStatus.OK,
        type: CreateUserDto,
        isArray: true,
        description: "List of all users"
    })
    @ApiUnauthorizedResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"
            }`
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad request"}`
    })
    @Get()
    findAll(@Query() query) {
        return this.userService.users({
            ...query,
            take: +query?.take || undefined,
            skip: +query?.skip || undefined,
            orderBy: JSON.parse(query?.orderBy ? query?.orderBy : "{\"id\":\"asc\"}"),
            where: JSON.parse(query?.where ? query?.where : "{\"id\": {\"not\": 0}}")
        });
    }

    /*--------------------------------------------------------*/

    @ApiOkResponse({
        status: HttpStatus.OK,
        type: CreateUserDto,
        isArray: false,
        description: "User found by email"
    })
    @ApiUnauthorizedResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"}`
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad request"}`
    })
    @ApiParam({
        name: "email",
        type: String,
        example: "qwerty.123@gmail.com",
        description: "Unique email to be found"
    })
    @Get(":email")
    findOne(@Param("email") data: string) {
        return this.userService.user({
            email: data
        });
    }

    /*--------------------------------------------------------*/

    @ApiOkResponse({
        status: HttpStatus.OK,
        type: CreateUserDto,
        description: "User data has been altered"

    })
    @ApiUnauthorizedResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"}`
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad request"}`
    })
    @Role("admin")
    @Patch(":email")
    update(@Param("email") data: string,
           @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(
            {
                where: {email: data},
                data: updateUserDto
            });
    }

    /*--------------------------------------------------------*/

    @ApiOkResponse({
        status: HttpStatus.OK,
        type: CreateUserDto,
        description: "User has been deleted"
    })
    @ApiUnauthorizedResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: `{
            "statusCode": 401,
            "message": "Unauthorized"}`
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Bad request"}`
    })
    @Role("admin")
    @Delete(":email")
    remove(@Param("email") data: string) {
        return this.userService.deleteUser({
            email: data
        });
    }
}

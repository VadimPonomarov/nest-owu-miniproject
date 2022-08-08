import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpStatus} from "@nestjs/common";
import {ClinicService} from "./clinic.service";
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiOkResponse, ApiParam,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";

import {AuthGuard, RoleGuard} from "../../guards";
import {CreateClinicDto, UpdateClinicDto} from "./dto";
import {Role} from "../../decorators";
import {ClinicServiceResponse} from "./entities";

@ApiTags("Clinics")
@UseGuards(AuthGuard, RoleGuard)
@Controller("clinics")
export class ClinicController {

    constructor(private readonly clinicService: ClinicService) {
    }

    /*------------------------------------------*/

    @ApiCreatedResponse({
        type: CreateClinicDto,
        status: HttpStatus.CREATED,
        description: "Success !!! Clinic has been created"
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
    create(@Body() createClinicDto: CreateClinicDto): Promise<CreateClinicDto> {
        return this.clinicService
            .create(createClinicDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: CreateClinicDto,
        isArray: true,
        status: HttpStatus.OK,
        description: "List of clinics"
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
    findAll(): Promise<CreateClinicDto[]> {
        return this.clinicService.findAll()
            .catch(err => err);
    }

    /*------------------------------------------*/


    @ApiOkResponse({
        type: ClinicServiceResponse,
        isArray: true,
        status: HttpStatus.OK,
        description: "List of clinics"
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
    @ApiParam({
        name: "id",
        description: "Service iD",
        type: String,
        required: true,
        example: "1"
    })
    @Get("service/:id")
    findAllByServiceName(@Param("id") id: string): Promise<ClinicServiceResponse[]> {
        return this.clinicService
            .findAllByServiceName(+id)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: CreateClinicDto,
        status: HttpStatus.OK,
        description: "Success !!! Clinic entity"
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
    @Get(":id")
    findOne(@Param("id") id: string): Promise<CreateClinicDto> {
        return this.clinicService.findOne(+id)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: UpdateClinicDto,
        status: HttpStatus.OK,
        description: "Clinic hase been updated"
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
    @Patch(":id")
    update(@Param("id") id: string,
           @Body() updateClinicDto: UpdateClinicDto): Promise<CreateClinicDto> {
        return this.clinicService
            .update(+id, updateClinicDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: CreateClinicDto,
        status: HttpStatus.OK,
        description: "Clinic has been deleted"
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
    @Delete(":id")
    remove(@Param("id") id: string): Promise<CreateClinicDto> {
        return this.clinicService.remove(+id)
            .catch(err => err);
    }
}

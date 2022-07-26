import {Controller, Get, Post, Body, Patch, Delete, HttpStatus, UseGuards} from '@nestjs/common';

import {DoctorServiceService} from "./doctor_service.service";
import {DoctorService} from "./entities";
import {CreateDoctorServiceDto, UpdateDoctorServiceDto} from "./dto";
import {Role} from "../../decorators";
import {
    ApiBadRequestResponse, ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from '@nestjs/swagger';
import {AuthGuard, RoleGuard} from '../../guards';

@ApiTags("Doctor-Service")
@ApiBearerAuth("accessToken")
@UseGuards(AuthGuard, RoleGuard)
@Controller("doctor-service")
export class DoctorServiceController {
    constructor(private readonly doctorServiceService: DoctorServiceService) {
    }

    /*----------------------------------------------------*/

    @ApiCreatedResponse({
        type: DoctorService,
        status: HttpStatus.CREATED,
        description: "Success !!! Record Doctor-Service has been created"
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
    create(@Body() createDoctorServiceDto: CreateDoctorServiceDto): Promise<DoctorService> {
        return this.doctorServiceService.create(createDoctorServiceDto)
            .catch(err => err);
    }

    /*----------------------------------------------------*/

    @ApiOkResponse({
        type: DoctorService,
        isArray: true,
        status: HttpStatus.OK,
        description: "List of Doctor-Service records"
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
    findAll(): Promise<DoctorService[]> {
        return this.doctorServiceService.findAll()
            .catch(err => err);
    }

    /*----------------------------------------------------*/

    @ApiOkResponse({
        type: DoctorService,
        status: HttpStatus.OK,
        description: "Doctor-Service entity"
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
    update(@Body() doctorService: DoctorService,
           @Body() updateDoctorServiceDto: UpdateDoctorServiceDto): Promise<DoctorService> {
        return this.doctorServiceService.updateOne(doctorService, updateDoctorServiceDto);
    }

    /*----------------------------------------------------*/

    @ApiOkResponse({
        type: DoctorService,
        status: HttpStatus.OK,
        description: "Doctor-Service entity"
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
    remove(@Body() doctorService: DoctorService): Promise<DoctorService> {
        return this.doctorServiceService.removeOne(doctorService)
            .catch(err => err);
    }
}

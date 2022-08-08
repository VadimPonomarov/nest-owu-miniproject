import {Controller, Get, Post, Body, Patch, Delete, HttpStatus, UseGuards} from '@nestjs/common';

import {DoctorServiceService} from "./doctor_service.service";
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
        type: CreateDoctorServiceDto,
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
    create(@Body() createDoctorServiceDto: CreateDoctorServiceDto): Promise<CreateDoctorServiceDto> {
        return this.doctorServiceService.create(createDoctorServiceDto)
            .catch(err => err);
    }

    /*----------------------------------------------------*/

    @ApiOkResponse({
        type: CreateDoctorServiceDto,
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
    findAll(): Promise<CreateDoctorServiceDto[]> {
        return this.doctorServiceService.findAll()
            .catch(err => err);
    }

    /*----------------------------------------------------*/

    @ApiOkResponse({
        type: CreateDoctorServiceDto,
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
    update(@Body() doctorService: CreateDoctorServiceDto,
           @Body() updateDoctorServiceDto: UpdateDoctorServiceDto): Promise<CreateDoctorServiceDto> {
        return this.doctorServiceService.updateOne(doctorService, updateDoctorServiceDto);
    }

    /*----------------------------------------------------*/

    @ApiOkResponse({
        type: CreateDoctorServiceDto,
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
    remove(@Body() doctorService: CreateDoctorServiceDto): Promise<CreateDoctorServiceDto> {
        return this.doctorServiceService.removeOne(doctorService)
            .catch(err => err);
    }
}

import {Controller, Get, Post, Body, Patch, Delete, HttpStatus, UseGuards} from '@nestjs/common';

import {DoctorClinicService} from "./doctor_clinic.service";
import {CreateDoctorClinicDto, UpdateDoctorClinicDto} from "./dto";
import {Role} from "../../decorators";
import {
    ApiBadRequestResponse, ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from '@nestjs/swagger';
import {AuthGuard, RoleGuard} from '../../guards';

@ApiTags("Doctor-Clinic")
@ApiBearerAuth("accessToken")
@UseGuards(AuthGuard, RoleGuard)
@Controller("doctor-clinic")
export class DoctorClinicController {
    constructor(private readonly doctorClinicService: DoctorClinicService) {
    }

    /*----------------------------------------------------*/

    @ApiCreatedResponse({
        type: CreateDoctorClinicDto,
        status: HttpStatus.CREATED,
        description: "Success !!! Record Doctor-Clinic has been created"
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
    create(@Body() createDoctorClinicDto: CreateDoctorClinicDto): Promise<CreateDoctorClinicDto> {
        return this.doctorClinicService.create(createDoctorClinicDto)
            .catch(err => err);
    }

    /*----------------------------------------------------*/

    @ApiOkResponse({
        type: CreateDoctorClinicDto,
        isArray: true,
        status: HttpStatus.OK,
        description: "List of Doctor-Clinic records"
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
    findAll(): Promise<CreateDoctorClinicDto[]> {
        return this.doctorClinicService.findAll()
            .catch(err => err);
    }

    /*----------------------------------------------------*/

    @ApiOkResponse({
        type: CreateDoctorClinicDto,
        status: HttpStatus.OK,
        description: "Doctor-Clinic entity"
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
    update(@Body() doctorClinic: CreateDoctorClinicDto,
           @Body() updateDoctorClinicDto: UpdateDoctorClinicDto): Promise<CreateDoctorClinicDto> {
        return this.doctorClinicService.updateOne(doctorClinic, updateDoctorClinicDto)
            .catch(err => err);
    }

    /*----------------------------------------------------*/

    @ApiOkResponse({
        type: CreateDoctorClinicDto,
        status: HttpStatus.OK,
        description: "Doctor-Clinic entity"
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
    remove(@Body() doctorClinic: CreateDoctorClinicDto): Promise<CreateDoctorClinicDto> {
        return this.doctorClinicService.removeOne(doctorClinic)
            .catch(err => err);
    }
}

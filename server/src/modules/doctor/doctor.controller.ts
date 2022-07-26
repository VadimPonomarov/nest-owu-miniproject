import {Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, UseGuards}
    from "@nestjs/common";
import {DoctorService} from "./doctor.service";
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiDefaultResponse,
    ApiOkResponse, ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import {CreateDoctorDto, UpdateDoctorDto} from "./dto";
import {AuthGuard, RoleGuard} from "../../guards";
import {Role} from "../../decorators";
import {Doctor} from "./entities";

@ApiTags("Doctors")
@UseGuards(AuthGuard, RoleGuard)
@Controller("doctors")
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) {
    }

    /*------------------------------------------*/

    @ApiCreatedResponse({
        type: Doctor,
        status: HttpStatus.CREATED,
        description: "Success !!! Doctor has been created"
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
    create(@Body() createDoctorDto: CreateDoctorDto): Promise<Doctor> {
        return this.doctorService.create(createDoctorDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: Doctor,
        isArray: true,
        status: HttpStatus.OK,
        description: "List of doctors"
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
    findAll(): Promise<Doctor> {
        return this.doctorService.findAll()
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: Doctor,
        status: HttpStatus.OK,
        description: "Success !!! Doctor entity"
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
    findOne(@Param("id") id: string): Promise<Doctor> {
        return this.doctorService.findOne(+id)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: Doctor,
        status: HttpStatus.OK,
        description: "Doctor hase been updated"
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
           @Body() updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
        return this.doctorService.update(+id, updateDoctorDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiDefaultResponse({
        type: Doctor,
        status: HttpStatus.OK,
        description: "Doctor has been deleted"
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
    remove(@Param("id") id: string): Promise<Doctor> {
        return this.doctorService.remove(+id)
            .catch(err => err);
    }
}

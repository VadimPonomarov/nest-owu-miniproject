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

@ApiTags("Doctors")
@UseGuards(AuthGuard, RoleGuard)
@Controller("doctors")
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) {
    }

    /*------------------------------------------*/

    @ApiCreatedResponse({
        type: CreateDoctorDto,
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
    create(@Body() createDoctorDto: CreateDoctorDto): Promise<CreateDoctorDto> {
        return this.doctorService.create(createDoctorDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: CreateDoctorDto,
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
    findAll(): Promise<CreateDoctorDto> {
        return this.doctorService.findAll()
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: CreateDoctorDto,
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
    findOne(@Param("id") id: string): Promise<CreateDoctorDto> {
        return this.doctorService.findOne(+id)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: CreateDoctorDto,
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
           @Body() updateDoctorDto: UpdateDoctorDto): Promise<CreateDoctorDto> {
        return this.doctorService.update(+id, updateDoctorDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiDefaultResponse({
        type: CreateDoctorDto,
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
    remove(@Param("id") id: string): Promise<CreateDoctorDto> {
        return this.doctorService.remove(+id)
            .catch(err => err);
    }
}

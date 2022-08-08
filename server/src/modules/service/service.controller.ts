import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpStatus}
    from '@nestjs/common';
import {ServiceService} from './service.service';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse, ApiDefaultResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from '@nestjs/swagger';
import {AuthGuard, RoleGuard} from '../../guards';
import {Role} from '../../decorators';
import {CreateServiceDto, UpdateServiceDto} from './dto';

@ApiTags('Services')
@UseGuards(AuthGuard, RoleGuard)
@Controller('services')
export class ServiceController {
    constructor(private readonly serviceService: ServiceService) {
    }

    /*------------------------------------------*/

    @ApiCreatedResponse({
        type: CreateServiceDto,
        status: HttpStatus.CREATED,
        description: 'Success !!! Service has been created'
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
    @Role('admin')
    @Post()
    create(@Body() createServiceDto: CreateServiceDto): Promise<CreateServiceDto> {
        return this.serviceService.create(createServiceDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: CreateServiceDto,
        isArray: true,
        status: HttpStatus.OK,
        description: 'List of services'
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
    findAll(): Promise<CreateServiceDto[]> {
        return this.serviceService.findAll()
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: CreateServiceDto,
        status: HttpStatus.OK,
        description: 'Success !!! Service entity'
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
    @Get(':id')
    findOne(@Param('id') id: string): Promise<CreateServiceDto> {
        return this.serviceService.findOne(+id)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiOkResponse({
        type: CreateServiceDto,
        status: HttpStatus.OK,
        description: 'Service hase been updated'
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
    @Role('admin')
    @Patch(':id')
    update(@Param('id') id: string,
           @Body() updateServiceDto: UpdateServiceDto): Promise<CreateServiceDto> {
        return this.serviceService.update(+id, updateServiceDto)
            .catch(err => err);
    }

    /*------------------------------------------*/

    @ApiDefaultResponse({
        type: CreateServiceDto,
        status: HttpStatus.OK,
        description: 'Service has been deleted'
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
    @Role('admin')
    @Delete(':id')
    remove(@Param('id') id: string): Promise<CreateServiceDto> {
        return this.serviceService.remove(+id)
            .catch(err => err);
    }
}

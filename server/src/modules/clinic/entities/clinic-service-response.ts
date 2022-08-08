import {ApiProperty} from '@nestjs/swagger';
import {IsNumber, IsString} from 'class-validator';

export class ClinicServiceResponse {
    @IsNumber()
    @ApiProperty({
        name: 'clinic',
        type: String,
        example: 'Lueilwitz LLC'
    })
    clinicName: string;

    @IsString()
    @ApiProperty({
        name: 'service',
        type: String,
        example: 'Therapy'
    })
    serviceName: string;

    @IsString()
    @ApiProperty({
        name: 'doctor',
        type: String,
        example: 'Susan Lind'
    })
    doctor: string;
}
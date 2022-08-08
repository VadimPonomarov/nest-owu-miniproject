import {IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateDoctorClinicDto {
    @IsNumber()
    @ApiProperty({
        name: "doctorId",
        description: "Unique doctor's id",
        type: Number,
        example: 111,
        required: true
    })
    doctorId: number;

    @IsNumber()
    @ApiProperty({
        name: "doctorId",
        description: "Unique clinic id",
        type: Number,
        example: "1",
        required: true
    })
    clinicId: number;
}

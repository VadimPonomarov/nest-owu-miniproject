import {ApiProperty} from "@nestjs/swagger";
import {IsNumber} from "class-validator";

export class DoctorClinic {

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

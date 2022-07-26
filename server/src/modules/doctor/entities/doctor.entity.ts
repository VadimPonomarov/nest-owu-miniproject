import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class Doctor {
    @IsNumber()
    @ApiProperty({
        description: "Unique iD, set as an autoincrement",
        type: Number,
        example: "1",
        required: false,
        uniqueItems: true,
    })
    id?: number;

    @IsString()
    @ApiProperty({
        name: "name",
        type: String,
        example: "Rowan Nikolaus",
    })
    name: string;
}

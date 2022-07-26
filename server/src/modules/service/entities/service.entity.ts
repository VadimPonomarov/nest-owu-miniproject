import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class Service {

    @IsNumber()
    @ApiProperty({
        description: "Unique iD, set as an autoincrement",
        type: Number,
        example: "111",
        required: false,
        uniqueItems: true,
    })
    id?: number;

    @IsString()
    @ApiProperty({
        description: "Unique service name",
        type: String,
        example: "Therapy",
        required: true,
        uniqueItems: true,
    })
    name: string;
}

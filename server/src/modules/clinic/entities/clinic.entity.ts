import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class Clinic {
    @IsNumber()
    @ApiProperty({
        name: "id",
        description: "Unique iD, set as an autoincrement",
        type: Number,
        example: "111",
        required: false,
        uniqueItems: true,
    })
    id?: number;

    @IsString()
    @ApiProperty({
        name: "name",
        description: "Unique name of a clinic",
        type: String,
        example: "Kyiv Vertebrology clinic",
        required: true,
        uniqueItems: true,
    })
    name: string;
}

import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class Role {

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
        description: "Unique role name",
        type: String,
        example: "admin",
        required: true,
        uniqueItems: true,
    })
    name: string;
}

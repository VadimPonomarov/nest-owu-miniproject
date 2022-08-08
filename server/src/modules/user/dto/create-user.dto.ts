import {IsEmail, IsNumber, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @IsNumber()
    @ApiProperty({
        description: "Unique iD, set as an autoincrement",
        type: Number,
        example: "111",
        required: false,
        uniqueItems: true,
    })
    id?: number;

    @IsEmail()
    @ApiProperty({
        description: "Email address",
        type: String,
        example: "qwerty.123@gmail.com",
        uniqueItems: true,
        required: true
    })
    email: string;

    @Length(2, 10)
    @IsString()
    @ApiProperty({
        description: "Nik name of User",
        type: String,
        name: "name",
        minLength: 2,
        maxLength: 10,
        example: "Vadim",
        uniqueItems: false,
        required: true
    })
    name: string;

    @ApiProperty({
        description: "User password",
        type: String,
        example: "qwerty1234",
        minLength: 2,
        maxLength: 10
    })
    @IsString()
    @Length(2, 10)
    password: string;
}

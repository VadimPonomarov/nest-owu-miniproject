import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsEnum, IsString} from "class-validator";

export class UserRole {
    @IsEmail()
    @ApiProperty({
        required: true,
        type: String,
        example: "qwerty123@gmail.com",
        uniqueItems: true,
        name: "email"
    })
    email: string;

    @IsString()
    @ApiProperty({
        required: true,
        type: String,
        example: "admin",
        uniqueItems: true,
        name: "role"
    })
    user_role: string;
}

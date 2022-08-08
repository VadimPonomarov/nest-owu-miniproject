import {IsEmail, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserRoleDto {
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

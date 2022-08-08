import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class LoginUserDto {
    @ApiProperty({type: String, example: 'Name', description: 'User name', minLength: 2, maxLength: 10})
    @IsString()
    @Length(2, 10)
    name: string;

    @ApiProperty({type: String, example: 'qwerty@gmail.com', description: 'E-mail'})
    @IsEmail()
    email: string;

    @ApiProperty({type: String, example: 'qwerty1234', description: 'Password', minLength: 2, maxLength: 10})
    @IsString()
    @Length(2, 10)
    password: string;
}
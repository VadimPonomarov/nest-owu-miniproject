import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

import {Role} from "../entities";

export class CreateRoleDto implements Role {

    @IsString()
    @ApiProperty()
    name: string;
}

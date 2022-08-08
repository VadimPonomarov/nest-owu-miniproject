import {Module} from "@nestjs/common";
import {PrismaService} from "../../core/prisma.service";
import {JwtService} from "@nestjs/jwt";

import {ServiceService} from "./service.service";
import {ServiceController} from "./service.controller";
import {TokenService} from "../token/token.service";
import {UserRoleService} from "../user_role/user_role.service";

@Module({
    controllers: [ServiceController],
    providers: [ServiceService, PrismaService, TokenService, JwtService, UserRoleService]
})
export class ServiceModule {
}

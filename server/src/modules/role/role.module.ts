import {Module} from "@nestjs/common";
import {PrismaService} from "../../core/prisma.service";

import {RoleService} from "./role.service";
import {RoleController} from "./role.controller";
import {RoleGuard} from "../../guards/role.guard";
import {TokenService} from "../token/token.service";
import {TokenModule} from "../token/token.module";
import {JwtService} from "@nestjs/jwt";
import {UserRoleService} from "../user_role/user_role.service";

@Module({
    controllers: [RoleController],
    providers: [RoleService, PrismaService, RoleGuard, TokenService, JwtService, UserRoleService],
    imports: [TokenModule]
})
export class RoleModule {
}

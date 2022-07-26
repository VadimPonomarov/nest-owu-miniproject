import {Module} from "@nestjs/common";
import {UserRoleService} from "./user_role.service";
import {UserRoleController} from "./user_role.controller";
import {PrismaService} from "../../core/prisma.service";
import {RoleGuard} from "../../guards/role.guard";
import {AuthGuard} from "../../guards";
import {TokenService} from "../token/token.service";
import {JwtService} from "@nestjs/jwt";

@Module({
    controllers: [UserRoleController],
    providers: [UserRoleService, PrismaService, RoleGuard, AuthGuard, TokenService, JwtService]
})
export class UserRoleModule {
}

import {forwardRef, Module} from '@nestjs/common';
import {PrismaService} from "../../core/prisma.service";
import {JwtService} from "@nestjs/jwt";

import {UserService} from './user.service';
import {UserController} from './user.controller';
import {TokenService} from "../token/token.service";
import {TokenModule} from "../token/token.module";
import {AuthGuard, RoleGuard} from "../../guards";
import {UserRoleService} from "../user_role/user_role.service";

@Module({
    controllers: [UserController],
    providers: [UserService, PrismaService, AuthGuard, RoleGuard, TokenService, JwtService, UserRoleService],
    imports: [forwardRef(() => TokenModule)]
})
export class UserModule {
}

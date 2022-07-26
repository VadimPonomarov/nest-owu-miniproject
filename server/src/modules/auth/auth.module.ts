import {Module} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {PrismaClient} from "@prisma/client";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {PrismaService} from "../../core/prisma.service";

import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {TokenService} from "../token/token.service";
import {UserService} from "../user/user.service";
import {TokenModule} from "../token/token.module";
import {UserModule} from "../user/user.module";
import {AuthGuard} from "../../guards/auth.guard";
import {RefreshGuard} from "../../guards/refresh.guard";

@Module({
    imports: [TokenModule, UserModule, PrismaClient, JwtModule],
    controllers: [AuthController],
    providers: [
        AuthService,
        TokenService,
        UserService,
        ConfigService,
        PrismaService,
        JwtService,
        AuthGuard,
        RefreshGuard
    ],
    exports: [AuthService, AuthGuard]
})
export class AuthModule {
}

import {Module} from '@nestjs/common';
import {JwtModule, JwtService} from "@nestjs/jwt";
import {PrismaService} from "../../core/prisma.service";

import {TokenService} from './token.service';

@Module({
    providers: [TokenService, JwtService, PrismaService],
    exports: [TokenService],
    imports: [JwtModule]
})
export class TokenModule {
}

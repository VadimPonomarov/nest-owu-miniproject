import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../../core/prisma.service";
import { CreateTokenDto } from "./dto";
import { CreateUserDto } from "../user/dto";
import { TokenPair } from "./entities";
export declare class TokenService {
    private _prismaService;
    private _jwtService;
    constructor(_prismaService: PrismaService, _jwtService: JwtService);
    create(createTokenDto: CreateTokenDto): Promise<import(".prisma/client").Token>;
    findOne(tokenData: string): Promise<import(".prisma/client").Token>;
    remove(tokenData: string): Promise<import(".prisma/client").Token>;
    getTokenPair(user: Partial<CreateUserDto>): TokenPair;
    refreshTokenPair(refreshToken: string): Promise<TokenPair>;
    isTokenValid(tokenData: string): Promise<boolean>;
}

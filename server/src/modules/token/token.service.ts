import {
    BadRequestException, ForbiddenException, Injectable, NotAcceptableException, UnauthorizedException
} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

import {PrismaService} from "../../core/prisma.service";
import {config} from "../../config";
import {CreateTokenDto} from "./dto";
import {CreateUserDto} from "../user/dto";
import {TokenPair} from "./entities";

@Injectable()
export class TokenService {
    constructor(private _prismaService: PrismaService,
                private _jwtService: JwtService) {
    }

    async create(createTokenDto: CreateTokenDto) {
        try {
            return await this._prismaService.token.create({data: {token: createTokenDto.token}});
        } catch (e) {
            throw new NotAcceptableException("Such a User can't be created");
        }
    }

    async findOne(tokenData: string) {
        try {
            return await this._prismaService.token.findUnique({where: {token: tokenData}});
        } catch (e) {
            throw new ForbiddenException();
        }
    }

    async remove(tokenData: string) {
        try {
            return await this._prismaService.token.delete({where: {token: tokenData}});
        } catch (e) {
            throw new BadRequestException();
        }
    }

    getTokenPair(user: Partial<CreateUserDto>): TokenPair {
        try {
            const payLoad = {name: user.name, email: user.email};
            const accessToken = this._jwtService.sign(payLoad,
                {
                    secret: config().token_secret,
                    expiresIn: "15m"
                });
            const refreshToken = this._jwtService.sign(payLoad,
                {
                    secret: config().token_secret,
                    expiresIn: "30d"
                });
            return {accessToken, refreshToken};
        } catch (e) {
            throw new ForbiddenException();
        }
    }

    async refreshTokenPair(refreshToken: string): Promise<TokenPair> {
        const tokenDAta = this._jwtService.verify(refreshToken,
            {
                secret: config().token_secret
            });

        if (!tokenDAta) {
            throw new ForbiddenException();
        }
        const {name, email} = tokenDAta;
        await this.findOne(refreshToken).then(token => {
            if (token.token === refreshToken) {
                this.remove(refreshToken);
            }
        });
        const newTokenPair = this.getTokenPair({name, email});
        await this.create({token: newTokenPair.refreshToken});
        return newTokenPair;
    }

    isTokenValid(tokenData: string): Promise<boolean> {
        try {
            return this._jwtService.verify(tokenData,
                {
                    secret: config().token_secret
                }
            );
        } catch (e) {
            throw new UnauthorizedException();
        }
    }
}

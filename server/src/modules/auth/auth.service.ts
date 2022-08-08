import {Injectable, NotAcceptableException} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

import {TokenService} from "../token/token.service";
import {UserService} from "../user/user.service";
import {ConfigService} from "@nestjs/config";
import {TokenPair} from "../token/entities";
import {CreateUserDto} from "../user/dto";
import {LoginUserDto} from "./dto";

@Injectable()
export class AuthService {
    constructor(private _tokenService: TokenService,
                private _userService: UserService,
                private _configService: ConfigService) {
    }

    async registerUser(user: CreateUserDto): Promise<CreateUserDto> {
        try {
            const isRegistered = await this._userService.user({email: user.email});
            return await this._userService.createUser(user);
        } catch (e) {
            throw new NotAcceptableException("Failure!!! User has not been registered");
        }
    }

    async loginUser(user: LoginUserDto): Promise<TokenPair> {
        try {
            const isRegistered = await this._userService.user({email: user.email});
            const isPasswordOk = bcrypt.compareSync(user.password, isRegistered.password);
            if (!isPasswordOk) {
                throw new NotAcceptableException("Failure!!! User has not been logged in")
            }
            const tokenPair = await this._tokenService.getTokenPair(user);
            await this._tokenService.create({token: tokenPair.refreshToken});
            return tokenPair;
        } catch (e) {
            throw new NotAcceptableException("Failure!!! User has not been logged in");
        }
    }
}

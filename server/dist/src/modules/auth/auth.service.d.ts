import { TokenService } from "../token/token.service";
import { UserService } from "../user/user.service";
import { ConfigService } from "@nestjs/config";
import { TokenPair } from "../token/entities";
import { CreateUserDto } from "../user/dto";
import { LoginUserDto } from "./dto";
export declare class AuthService {
    private _tokenService;
    private _userService;
    private _configService;
    constructor(_tokenService: TokenService, _userService: UserService, _configService: ConfigService);
    registerUser(user: CreateUserDto): Promise<CreateUserDto>;
    loginUser(user: LoginUserDto): Promise<TokenPair>;
}

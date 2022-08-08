import { Response, Request } from "express";
import { AuthService } from "./auth.service";
import { TokenService } from "../token/token.service";
import { LoginUserDto } from "./dto";
import { RefreshToken } from "../token/entities";
import { CreateUserDto } from "../user/dto";
export declare class AuthController {
    private _authService;
    private _tokenService;
    constructor(_authService: AuthService, _tokenService: TokenService);
    refreshTokenPair(refreshTokenFromBody?: RefreshToken, request?: Request, res?: Response): Promise<void>;
    registerUser(user: CreateUserDto, res: Response): Promise<void>;
    login(userData: LoginUserDto, res: Response): Promise<void>;
}

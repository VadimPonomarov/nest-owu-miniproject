import {
    Body,
    Controller,
    HttpStatus,
    Post,
    Req,
    Res,
    UseGuards
} from "@nestjs/common";
import {Response, Request} from "express";
import {
    ApiBadRequestResponse,
    ApiBody,
    ApiCookieAuth,
    ApiCreatedResponse,
    ApiTags
} from "@nestjs/swagger";

import {AuthService} from "./auth.service";
import {TokenService} from "../token/token.service";
import {RefreshTokenPairDto} from "../token/dto";
import {LoginUserDto} from "./dto";
import {RefreshGuard} from "../../guards";
import {RefreshToken, TokenPair} from "../token/entities";
import { CreateUserDto } from "../user/dto";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {

    constructor(private _authService: AuthService,
                private _tokenService: TokenService) {
    }


    @ApiCreatedResponse({
        type: TokenPair,
        status: HttpStatus.CREATED,
        description: "User was provided with refreshed tokenPair"
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Failure!!! Refreshed tokenPair was not provided"
        }`
    })
    @ApiBody({type: RefreshTokenPairDto})
    @ApiCookieAuth()
    @UseGuards(RefreshGuard)
    @Post("refresh")
    async refreshTokenPair(@Body("refreshToken") refreshTokenFromBody?: RefreshToken,
                           @Req() request?: Request,
                           @Res() res?: Response): Promise<void> {
        const {token} = request.cookies;
        this._tokenService.refreshTokenPair(token ? token : refreshTokenFromBody)
            .then((respData) => {
                res.cookie(
                    "token",
                    respData.refreshToken,
                    {
                        httpOnly: true,
                        sameSite: true
                    });
                return res.send(respData);
            })
            .catch(err => res.send(err.response));
    };


    @ApiCreatedResponse({
        type: CreateUserDto,
        status: HttpStatus.CREATED,
        description: "User has been registered"
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Failure!!! User has not been registered"
        }`
    })
    @ApiBody({type: LoginUserDto})
    @Post("register")
    async registerUser(@Body() user: CreateUserDto, @Res() res: Response): Promise<void> {
        await this._authService.registerUser(user)
            .then(user => res.send(user))
            .catch(err => res.send(err.response));
    }


    @ApiCreatedResponse({
        type: TokenPair,
        status: HttpStatus.CREATED,
        description: "User has been logged in"
    })
    @ApiBadRequestResponse({
        status: HttpStatus.BAD_REQUEST,
        description: `{
            "statusCode": 400,
            "message": "Failure!!! User has not been logged in"
        }`
    })
    @ApiBody({type: LoginUserDto})
    @Post("login")
    async login(@Body() userData: LoginUserDto, @Res() res: Response): Promise<void> {
        await this._authService.loginUser(userData)
            .then((tokenPair) => {
                res.cookie(
                    "token",
                    tokenPair.refreshToken,
                    {
                        httpOnly: true,
                        sameSite: true
                    });
                res.send(tokenPair);
            })
            .catch(err => res.status(err.status).json({status:err.status, message: err.message}))
    }
}

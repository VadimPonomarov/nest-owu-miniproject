import {Module} from '@nestjs/common';
import {DoctorServiceService} from './doctor_service.service';
import {DoctorServiceController} from './doctor_service.controller';
import {PrismaService} from '../../core/prisma.service';
import {TokenService} from '../token/token.service';
import {JwtService} from '@nestjs/jwt';
import {UserRoleService} from '../user_role/user_role.service';

@Module({
    controllers: [DoctorServiceController],
    providers: [DoctorServiceService, PrismaService, TokenService, JwtService, UserRoleService]
})
export class DoctorServiceModule {
}

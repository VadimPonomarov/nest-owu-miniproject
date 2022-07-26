import { Module } from '@nestjs/common';
import {PrismaService} from "../../core/prisma.service";

import { DoctorClinicService } from './doctor_clinic.service';
import { DoctorClinicController } from './doctor_clinic.controller';
import {TokenService} from '../token/token.service';
import {JwtService} from '@nestjs/jwt';
import {UserRoleService} from '../user_role/user_role.service';

@Module({
  controllers: [DoctorClinicController],
  providers: [DoctorClinicService, PrismaService, TokenService, JwtService, UserRoleService]
})
export class DoctorClinicModule {}

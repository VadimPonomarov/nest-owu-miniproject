import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import {PrismaService} from "../../core/prisma.service";

import { DoctorController } from './doctor.controller';
import {TokenService} from "../token/token.service";
import {JwtService} from "@nestjs/jwt";
import {UserRoleService} from "../user_role/user_role.service";

@Module({
  controllers: [DoctorController],
  providers: [DoctorService, PrismaService, TokenService, JwtService, UserRoleService]
})
export class DoctorModule {}

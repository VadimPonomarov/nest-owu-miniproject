import { Module } from '@nestjs/common';
import {PrismaService} from "../../core/prisma.service";

import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import {AuthGuard, RoleGuard} from "../../guards";
import {JwtService} from "@nestjs/jwt";
import {TokenService} from "../token/token.service";
import {UserRoleService} from "../user_role/user_role.service";

@Module({
  controllers: [ClinicController],
  providers: [ClinicService, PrismaService, AuthGuard, RoleGuard, TokenService, JwtService, UserRoleService]
})
export class ClinicModule {}

import {BadRequestException, Injectable} from "@nestjs/common";
import {PrismaService} from "../../core/prisma.service";

import {CreateUserRoleDto, UpdateUserRoleDto} from "./dto";
import {UserRole} from "./entities";

@Injectable()
export class UserRoleService {
    constructor(private _prismaService: PrismaService) {
    }

    async create(createUserRoleDto: CreateUserRoleDto): Promise<UserRole> {
        try {
            return await this._prismaService.usersRoles.create({
                data: createUserRoleDto
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findAll(): Promise<UserRole[]> {
        try {
            return await this._prismaService.usersRoles.findMany();
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findAllByEmail(email: string): Promise<UserRole[]> {
        try {
            return await this._prismaService.usersRoles.findMany({
                where: {
                    email
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async updateOne(userRole: UserRole, updateUserRole: UpdateUserRoleDto): Promise<UserRole> {
        try {
            return await this._prismaService.usersRoles.update({
                where: {
                    email_user_role: userRole
                },
                data: updateUserRole
            });
        } catch {
            throw new BadRequestException();
        }
    }

    async removeOne(userRole: UserRole): Promise<UserRole> {
        try {
            return await this._prismaService.usersRoles.delete({
                where: {
                    email_user_role: userRole
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }
}

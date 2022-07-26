import {BadRequestException, Injectable} from "@nestjs/common";
import {PrismaService} from "../../core/prisma.service";

import {CreateRoleDto, UpdateRoleDto} from "./dto";
import {Role} from "./entities";


@Injectable()
export class RoleService {
    constructor(private _prismaService: PrismaService) {
    }

    async create(createRoleDto: CreateRoleDto): Promise<Role> {
        try {
            return await this._prismaService.role.create({
                data: createRoleDto
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findAll(): Promise<Role[]> {
        try {
            return await this._prismaService.role.findMany();
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findOne(roleName: string): Promise<Role> {
        try {
            return await this._prismaService.role.findUnique({
                where: {
                    name: roleName
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async update(roleName: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
        try {
            return await this._prismaService.role.update({
                where: {
                    name: roleName
                }, data: updateRoleDto
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async remove(roleName: string): Promise<Role> {
        try {
            return await this._prismaService.role.delete({
                where: {
                    name: roleName
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }
}

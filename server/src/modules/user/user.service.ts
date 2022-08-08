import {BadRequestException, Injectable} from "@nestjs/common";
import {User, Prisma} from "@prisma/client";
import {PrismaService} from "src/core/prisma.service";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {
    }

    async user(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }

    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]> {
        return await this.prisma.user.findMany({
            ...params,
            include: {
                roles: true
            }
        });
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        const bcryptedPassword = bcrypt.hashSync(data.password, 5);
        data = {...data, password: bcryptedPassword};

        try {
            return await this.prisma.user.create({
                data,
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User> {
        const {where, data} = params;
        return this.prisma.user.update({
            data,
            where,
        });
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where,
        });
    }

}

import {BadRequestException, Injectable} from "@nestjs/common";
import {PrismaService} from "../../core/prisma.service";

import {CreateServiceDto, UpdateServiceDto} from "./dto";
import {Service} from "./entities";

@Injectable()
export class ServiceService {
    constructor(private _prismaService: PrismaService) {
    }

    async create(createServiceDto: CreateServiceDto): Promise<Service> {
        try {
            return await this._prismaService.service.create({
                data: createServiceDto
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findAll(): Promise<Service[]> {
        try {
            return await this._prismaService.service.findMany();
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findOne(id: number): Promise<Service> {
        try {
            return await this._prismaService.service.findUnique({
                where: {
                    id
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async update(id: number, updateServiceDto: UpdateServiceDto): Promise<Service> {
        try {
            return await this._prismaService.service.update({
                where: {
                    id
                },
                data: updateServiceDto
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async remove(id: number): Promise<Service> {
        try {
            return await this._prismaService.service.delete({
                where: {
                    id
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }
}

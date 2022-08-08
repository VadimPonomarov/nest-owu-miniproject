import {BadRequestException, Injectable} from "@nestjs/common";

import {PrismaService} from "../../core/prisma.service";
import {CreateDoctorServiceDto, UpdateDoctorServiceDto} from "./dto";

@Injectable()
export class DoctorServiceService {
    constructor(private _prismaService: PrismaService) {
    }

    async create(createDoctorServiceDto: CreateDoctorServiceDto): Promise<CreateDoctorServiceDto> {
        try {
            return await this._prismaService.doctorService.create({
                data: createDoctorServiceDto
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findAll(): Promise<CreateDoctorServiceDto[]> {
        try {
            return await this._prismaService.doctorService.findMany();
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async updateOne(doctorService: CreateDoctorServiceDto,
                    updateDoctorService: UpdateDoctorServiceDto): Promise<CreateDoctorServiceDto> {
        try {
            return await this._prismaService.doctorService.update({
                where: {
                    doctorId_serviceId: doctorService
                },
                data: updateDoctorService
            });
        } catch {
            throw new BadRequestException();
        }
    }

    async removeOne(doctorService: CreateDoctorServiceDto): Promise<CreateDoctorServiceDto> {
        try {
            return await this._prismaService.doctorService.delete({
                where: {
                    doctorId_serviceId: doctorService
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }
}

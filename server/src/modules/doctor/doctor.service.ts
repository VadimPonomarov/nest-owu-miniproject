import {BadRequestException, Injectable} from "@nestjs/common";
import {PrismaService} from "../../core/prisma.service";

import {CreateDoctorDto, UpdateDoctorDto} from "./dto";


@Injectable()
export class DoctorService {

    constructor(private _prismaService: PrismaService) {
    }

    async create(createDoctorDto: CreateDoctorDto): Promise<CreateDoctorDto> {
        try {
            return await this._prismaService.doctor.create({
                data: createDoctorDto
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findAll(): Promise<CreateDoctorDto[]> {
        try {
            return await this._prismaService.doctor.findMany();
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findOne(id: number): Promise<CreateDoctorDto> {
        try {
            return await this._prismaService.doctor.findUnique({
                where: {
                    id
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<CreateDoctorDto> {
        try {
            return await this._prismaService.doctor.update({
                where: {
                    id
                },
                data: updateDoctorDto
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async remove(id: number): Promise<CreateDoctorDto> {
        try {
            return await this._prismaService.doctor.delete({
                where: {
                    id
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }
}

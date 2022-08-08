import {BadRequestException, Injectable} from "@nestjs/common";
import {PrismaService} from "../../core/prisma.service";

import {CreateDoctorClinicDto, UpdateDoctorClinicDto} from "./dto";

@Injectable()
export class DoctorClinicService {
    constructor(private _prismaService: PrismaService) {
    }

    async create(createDoctorClinicDto: CreateDoctorClinicDto): Promise<CreateDoctorClinicDto> {
        try {
            return await this._prismaService.doctorClinic.create({
                data: createDoctorClinicDto
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findAll(): Promise<CreateDoctorClinicDto[]> {
        try {
            return await this._prismaService.doctorClinic.findMany();
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async updateOne(doctorClinic: CreateDoctorClinicDto, updateDoctorClinic: UpdateDoctorClinicDto): Promise<CreateDoctorClinicDto> {
        try {
            return await this._prismaService.doctorClinic.update({
                where: {
                    doctorId_clinicId: doctorClinic
                },
                data: updateDoctorClinic
            });
        } catch {
            throw new BadRequestException();
        }
    }

    async removeOne(doctorClinic: CreateDoctorClinicDto): Promise<CreateDoctorClinicDto> {
        try {
            return await this._prismaService.doctorClinic.delete({
                where: {
                    doctorId_clinicId: doctorClinic
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }
}

import {BadRequestException, Injectable} from "@nestjs/common";
import {PrismaService} from "../../core/prisma.service";

import {CreateClinicDto, UpdateClinicDto} from "./dto";
import {DoctorClinic} from "@prisma/client";
import {ClinicServiceResponse} from "./entities";

@Injectable()
export class ClinicService {

    constructor(private _prismaService: PrismaService) {
    }

    async create(createClinicDto: CreateClinicDto): Promise<CreateClinicDto> {
        try {
            return await this._prismaService.clinic.create({
                data: createClinicDto
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findAll(): Promise<CreateClinicDto[]> {
        try {
            return await this._prismaService.clinic.findMany();
        } catch (e) {
            throw new BadRequestException();
        }
    }


    async findAllByServiceName(serviceId: number): Promise<ClinicServiceResponse[] | any> {

        try {
            return await this._prismaService.$queryRaw<DoctorClinic>`
            SELECT C."name" as "clinic", D."name" as "doctor", S."name" as "service" 
            FROM public."DoctorClinic" as DC
            JOIN (SELECT * FROM public."Doctor") as D 
            ON DC."doctorId" = D."id"
            JOIN (SELECT * FROM public."Clinic") as C 
            ON DC."clinicId" = C."id"
            JOIN (SELECT * FROM public."Service") as S 
            ON ${serviceId} = S."id"
            WHERE DC."doctorId" IN (
                    SELECT DS."doctorId" 
                    FROM public."DoctorService" as DS 
                    WHERE DS."serviceId" = ${serviceId}
                ) 
                ORDER BY C."name" ASC, D."name" ASC
            ` as ClinicServiceResponse[] | any;
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async findOne(id: number): Promise<CreateClinicDto> {
        try {
            return await this._prismaService.clinic.findUnique({
                where: {
                    id
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async update(id: number, updateClinicDto: UpdateClinicDto): Promise<CreateClinicDto> {
        try {
            return await this._prismaService.clinic.update({
                where: {
                    id
                },
                data: updateClinicDto
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async remove(id: number): Promise<CreateClinicDto> {
        try {
            return await this._prismaService.clinic.delete({
                where: {
                    id
                }
            });
        } catch (e) {
            throw new BadRequestException();
        }
    }
}

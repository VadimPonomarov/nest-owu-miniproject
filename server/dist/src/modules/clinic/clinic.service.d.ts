import { PrismaService } from "../../core/prisma.service";
import { CreateClinicDto, UpdateClinicDto } from "./dto";
import { ClinicServiceResponse } from "./entities";
export declare class ClinicService {
    private _prismaService;
    constructor(_prismaService: PrismaService);
    create(createClinicDto: CreateClinicDto): Promise<CreateClinicDto>;
    findAll(): Promise<CreateClinicDto[]>;
    findAllByServiceName(serviceId: number): Promise<ClinicServiceResponse[] | any>;
    findOne(id: number): Promise<CreateClinicDto>;
    update(id: number, updateClinicDto: UpdateClinicDto): Promise<CreateClinicDto>;
    remove(id: number): Promise<CreateClinicDto>;
}

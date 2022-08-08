import { PrismaService } from "../../core/prisma.service";
import { CreateDoctorServiceDto, UpdateDoctorServiceDto } from "./dto";
export declare class DoctorServiceService {
    private _prismaService;
    constructor(_prismaService: PrismaService);
    create(createDoctorServiceDto: CreateDoctorServiceDto): Promise<CreateDoctorServiceDto>;
    findAll(): Promise<CreateDoctorServiceDto[]>;
    updateOne(doctorService: CreateDoctorServiceDto, updateDoctorService: UpdateDoctorServiceDto): Promise<CreateDoctorServiceDto>;
    removeOne(doctorService: CreateDoctorServiceDto): Promise<CreateDoctorServiceDto>;
}

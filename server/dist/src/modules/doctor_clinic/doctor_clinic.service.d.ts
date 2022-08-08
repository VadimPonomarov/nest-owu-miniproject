import { PrismaService } from "../../core/prisma.service";
import { CreateDoctorClinicDto, UpdateDoctorClinicDto } from "./dto";
export declare class DoctorClinicService {
    private _prismaService;
    constructor(_prismaService: PrismaService);
    create(createDoctorClinicDto: CreateDoctorClinicDto): Promise<CreateDoctorClinicDto>;
    findAll(): Promise<CreateDoctorClinicDto[]>;
    updateOne(doctorClinic: CreateDoctorClinicDto, updateDoctorClinic: UpdateDoctorClinicDto): Promise<CreateDoctorClinicDto>;
    removeOne(doctorClinic: CreateDoctorClinicDto): Promise<CreateDoctorClinicDto>;
}

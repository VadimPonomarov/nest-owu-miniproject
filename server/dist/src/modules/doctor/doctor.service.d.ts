import { PrismaService } from "../../core/prisma.service";
import { CreateDoctorDto, UpdateDoctorDto } from "./dto";
export declare class DoctorService {
    private _prismaService;
    constructor(_prismaService: PrismaService);
    create(createDoctorDto: CreateDoctorDto): Promise<CreateDoctorDto>;
    findAll(): Promise<CreateDoctorDto[]>;
    findOne(id: number): Promise<CreateDoctorDto>;
    update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<CreateDoctorDto>;
    remove(id: number): Promise<CreateDoctorDto>;
}

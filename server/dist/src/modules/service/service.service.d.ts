import { PrismaService } from "../../core/prisma.service";
import { CreateServiceDto, UpdateServiceDto } from "./dto";
export declare class ServiceService {
    private _prismaService;
    constructor(_prismaService: PrismaService);
    create(createServiceDto: CreateServiceDto): Promise<CreateServiceDto>;
    findAll(): Promise<CreateServiceDto[]>;
    findOne(id: number): Promise<CreateServiceDto>;
    update(id: number, updateServiceDto: UpdateServiceDto): Promise<CreateServiceDto>;
    remove(id: number): Promise<CreateServiceDto>;
}

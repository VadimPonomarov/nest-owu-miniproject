import { ServiceService } from './service.service';
import { CreateServiceDto, UpdateServiceDto } from './dto';
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
    create(createServiceDto: CreateServiceDto): Promise<CreateServiceDto>;
    findAll(): Promise<CreateServiceDto[]>;
    findOne(id: string): Promise<CreateServiceDto>;
    update(id: string, updateServiceDto: UpdateServiceDto): Promise<CreateServiceDto>;
    remove(id: string): Promise<CreateServiceDto>;
}

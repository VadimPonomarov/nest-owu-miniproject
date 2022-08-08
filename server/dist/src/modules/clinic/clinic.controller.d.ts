import { ClinicService } from "./clinic.service";
import { CreateClinicDto, UpdateClinicDto } from "./dto";
import { ClinicServiceResponse } from "./entities";
export declare class ClinicController {
    private readonly clinicService;
    constructor(clinicService: ClinicService);
    create(createClinicDto: CreateClinicDto): Promise<CreateClinicDto>;
    findAll(): Promise<CreateClinicDto[]>;
    findAllByServiceName(id: string): Promise<ClinicServiceResponse[]>;
    findOne(id: string): Promise<CreateClinicDto>;
    update(id: string, updateClinicDto: UpdateClinicDto): Promise<CreateClinicDto>;
    remove(id: string): Promise<CreateClinicDto>;
}

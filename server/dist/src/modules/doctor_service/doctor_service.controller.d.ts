import { DoctorServiceService } from "./doctor_service.service";
import { CreateDoctorServiceDto, UpdateDoctorServiceDto } from "./dto";
export declare class DoctorServiceController {
    private readonly doctorServiceService;
    constructor(doctorServiceService: DoctorServiceService);
    create(createDoctorServiceDto: CreateDoctorServiceDto): Promise<CreateDoctorServiceDto>;
    findAll(): Promise<CreateDoctorServiceDto[]>;
    update(doctorService: CreateDoctorServiceDto, updateDoctorServiceDto: UpdateDoctorServiceDto): Promise<CreateDoctorServiceDto>;
    remove(doctorService: CreateDoctorServiceDto): Promise<CreateDoctorServiceDto>;
}

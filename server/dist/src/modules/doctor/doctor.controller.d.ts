import { DoctorService } from "./doctor.service";
import { CreateDoctorDto, UpdateDoctorDto } from "./dto";
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    create(createDoctorDto: CreateDoctorDto): Promise<CreateDoctorDto>;
    findAll(): Promise<CreateDoctorDto>;
    findOne(id: string): Promise<CreateDoctorDto>;
    update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<CreateDoctorDto>;
    remove(id: string): Promise<CreateDoctorDto>;
}

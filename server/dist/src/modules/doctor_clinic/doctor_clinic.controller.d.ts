import { DoctorClinicService } from "./doctor_clinic.service";
import { CreateDoctorClinicDto, UpdateDoctorClinicDto } from "./dto";
export declare class DoctorClinicController {
    private readonly doctorClinicService;
    constructor(doctorClinicService: DoctorClinicService);
    create(createDoctorClinicDto: CreateDoctorClinicDto): Promise<CreateDoctorClinicDto>;
    findAll(): Promise<CreateDoctorClinicDto[]>;
    update(doctorClinic: CreateDoctorClinicDto, updateDoctorClinicDto: UpdateDoctorClinicDto): Promise<CreateDoctorClinicDto>;
    remove(doctorClinic: CreateDoctorClinicDto): Promise<CreateDoctorClinicDto>;
}

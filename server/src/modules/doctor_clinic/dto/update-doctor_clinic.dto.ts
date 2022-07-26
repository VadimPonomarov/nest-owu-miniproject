import { PartialType } from '@nestjs/swagger';
import { CreateDoctorClinicDto } from './create-doctor_clinic.dto';

export class UpdateDoctorClinicDto extends PartialType(CreateDoctorClinicDto) {}

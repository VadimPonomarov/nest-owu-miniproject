"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDoctorServiceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_doctor_service_dto_1 = require("./create-doctor_service.dto");
class UpdateDoctorServiceDto extends (0, swagger_1.PartialType)(create_doctor_service_dto_1.CreateDoctorServiceDto) {
}
exports.UpdateDoctorServiceDto = UpdateDoctorServiceDto;
//# sourceMappingURL=update-doctor_service.dto.js.map
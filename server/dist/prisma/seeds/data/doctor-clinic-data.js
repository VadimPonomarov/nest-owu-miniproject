"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorClinicData = void 0;
const doctorClinic = new Set();
while (doctorClinic.size <= 20) {
    doctorClinic.add(JSON.stringify({
        doctorId: Math.floor(Math.random() * 9) + 1, clinicId: Math.floor(Math.random() * 4) + 1
    }));
}
exports.doctorClinicData = [...doctorClinic];
//# sourceMappingURL=doctor-clinic-data.js.map
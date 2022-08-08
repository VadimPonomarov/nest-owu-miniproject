"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorServiceData = void 0;
const doctorService = new Set();
while (doctorService.size <= 20) {
    doctorService.add(JSON.stringify({
        doctorId: Math.floor(Math.random() * 9) + 1, serviceId: Math.floor(Math.random() * 4) + 1
    }));
}
exports.doctorServiceData = [...doctorService];
//# sourceMappingURL=doctor-service-data.js.map
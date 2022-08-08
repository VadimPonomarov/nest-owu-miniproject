"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
const data_1 = require("./data");
const prisma = new client_1.PrismaClient();
async function main() {
    await console.log(`Start seeding ...`);
    for (const item of data_1.userData) {
        const user = await prisma.user.create({
            data: item,
        });
        await console.log(`Created user ${user.name} with id: ${user.id}`);
    }
    for (let i = 1; i <= 10; i++) {
        const doctor = await prisma.doctor.create({
            data: { name: faker_1.faker.name.findName() }
        });
        await console.log(`Created doctor ${doctor.name} with id: ${doctor.name}`);
    }
    for (let i = 1; i <= 10; i++) {
        const clinic = await prisma.clinic.create({
            data: { name: faker_1.faker.company.companyName() },
        });
        await console.log(`Created clinic ${clinic.name} with id: ${clinic.id}`);
    }
    for (const item of data_1.roleData) {
        const role = await prisma.role.create({
            data: item,
        });
        await console.log(`Created role ${role.name} with id: ${role.id}`);
    }
    for (const item of data_1.serviceData) {
        const service = await prisma.service.create({
            data: item,
        });
        await console.log(`Created service with name: ${service.name} id: ${service.id}`);
    }
    for (const item of data_1.userRoleData) {
        const userRole = await prisma.usersRoles.create({
            data: item,
        });
        await console.log(`Created User-Role record with email: ${userRole.email} - role: ${userRole.user_role}`);
    }
    for (const item of data_1.doctorServiceData) {
        const doctorService = await prisma.doctorService.create({
            data: JSON.parse(item),
        });
        await console.log(`Created Doctor-Service record with doctorId: ${doctorService.doctorId} - serviceId: ${doctorService.serviceId}`);
    }
    for (const item of data_1.doctorClinicData) {
        const doctorClinic = await prisma.doctorClinic.create({
            data: JSON.parse(item),
        });
        await console.log(`Created Doctor-Clinic record with doctorId: ${doctorClinic.doctorId} - clinicId: ${doctorClinic.clinicId}`);
    }
    await console.log(`Seeding finished.`);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map
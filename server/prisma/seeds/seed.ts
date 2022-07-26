import {PrismaClient} from "@prisma/client";
import {faker} from "@faker-js/faker";

import {
    userData,
    roleData,
    serviceData,
    userRoleData,
    doctorServiceData,
    doctorClinicData,
} from "./data";

const prisma = new PrismaClient();

async function main() {
    await console.log(`Start seeding ...`);
    /*user*/
    for (const item of userData) {
        const user = await prisma.user.create({
            data: item,
        });
        await console.log(`Created user ${user.name} with id: ${user.id}`);
    }
    /*doctor*/
    for (let i = 1; i <= 10; i++) {
        const doctor = await prisma.doctor.create({
            data: {name: faker.name.findName()}
        });
        await console.log(`Created doctor ${doctor.name} with id: ${doctor.name}`);
    }
    /*clinic*/
    for (let i = 1; i <= 10; i++) {
        const clinic = await prisma.clinic.create({
            data: {name: faker.company.companyName()},
        });
        await console.log(`Created clinic ${clinic.name} with id: ${clinic.id}`);
    }
    /*role*/
    for (const item of roleData) {
        const role = await prisma.role.create({
            data: item,
        });
        await console.log(`Created role ${role.name} with id: ${role.id}`);
    }
    /*service*/
    for (const item of serviceData) {
        const service = await prisma.service.create({
            data: item,
        });
        await console.log(`Created service with name: ${service.name} id: ${service.id}`);
    }
    /*userRole*/
    for (const item of userRoleData) {
        const userRole = await prisma.usersRoles.create({
            data: item,
        });
        await console.log(
            `Created User-Role record with email: ${userRole.email} - role: ${userRole.user_role}`
        );
    }
    /*doctorService*/
    for (const item of doctorServiceData) {
        const doctorService = await prisma.doctorService.create({
            data: JSON.parse(item),
        });
        await console.log(
            `Created Doctor-Service record with doctorId: ${doctorService.doctorId} - serviceId: ${doctorService.serviceId}`
        );
    }
    /*doctorClinic*/
    for (const item of doctorClinicData) {
        const doctorClinic = await prisma.doctorClinic.create({
            data: JSON.parse(item),
        });
        await console.log(
            `Created Doctor-Clinic record with doctorId: ${doctorClinic.doctorId} - clinicId: ${doctorClinic.clinicId}`
        );
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
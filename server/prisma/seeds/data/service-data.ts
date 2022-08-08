import {Prisma} from "@prisma/client";

export const serviceData: Prisma.ServiceCreateInput[] = [
    {name: "Traumatology"},
    {name: "Therapy"},
    {name: "Vertebrology"},
    {name: "Mamology"},
    {name: "Surgery"},
];
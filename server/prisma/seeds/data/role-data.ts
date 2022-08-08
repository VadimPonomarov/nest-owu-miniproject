import {Prisma} from "@prisma/client";

export const roleData: Prisma.RoleCreateInput[] = [
    {name: "admin"},
    {name: "basic"},
];
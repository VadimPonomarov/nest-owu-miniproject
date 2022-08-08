import {Prisma} from "@prisma/client";
import * as bcrypt from "bcryptjs";

export const userData: Prisma.UserCreateInput[] = [
    {
        name: "Admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("12345", 5)
    },
    {
        name: "UserTest",
        email: "userTest@gmail.com",
        password: bcrypt.hashSync("12345", 5)
    },
];
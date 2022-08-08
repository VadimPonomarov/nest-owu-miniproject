"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userData = void 0;
const bcrypt = require("bcryptjs");
exports.userData = [
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
//# sourceMappingURL=user-data.js.map
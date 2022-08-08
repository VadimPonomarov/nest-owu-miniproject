"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config = () => ({
    production: false,
    port: process.env.PORT || 3001,
    token_secret: process.env.TOKEN_SECRET || 'my_token_secret_word',
    salt: process.env.BCRYPT_SALT || 5
});
exports.config = config;
//# sourceMappingURL=config.js.map
export const config = () => ({
    production: false,
    port: process.env.PORT || 3001,
    token_secret: process.env.TOKEN_SECRET || 'my_token_secret_word',
    salt: process.env.BCRYPT_SALT || 5
});
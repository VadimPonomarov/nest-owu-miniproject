"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    });
    app.use(cookieParser());
    const appConfig = await app.get(config_1.ConfigService);
    const PORT = appConfig.get("port");
    const swagConfig = new swagger_1.DocumentBuilder()
        .setTitle("NEST-OWU-PROJECT")
        .setDescription("Nest-OWU-miniproject api description")
        .setVersion("1.0")
        .addBearerAuth({
        type: "http",
        scheme: "bearer",
        bearerFormat: "Bearer"
    }, "accessToken")
        .addCookieAuth("token", {
        type: "apiKey",
        description: "Valid refresh Token must be available"
    })
        .addTag("NEST-OWU-PROJECT")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swagConfig);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(PORT, () => {
        console.log("Server has started on port: " + PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map
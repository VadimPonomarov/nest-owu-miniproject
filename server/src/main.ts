import {NestFactory} from "@nestjs/core";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ConfigService} from "@nestjs/config";
import * as cookieParser from "cookie-parser";

import {AppModule} from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    });
    app.use(cookieParser());
    const appConfig = await app.get(ConfigService);
    const PORT = appConfig.get("port");

    const swagConfig = new DocumentBuilder()
        .setTitle("NEST-OWU-PROJECT")
        .setDescription("Nest-OWU-miniproject api description")
        .setVersion("1.0")
        .addBearerAuth(
            {
                type: "http",
                scheme: "bearer",
                bearerFormat: "Bearer"
            },
            "accessToken"
        )
        .addCookieAuth("token", {
            type: "apiKey",
            description: "Valid refresh Token must be available"
        })
        .addTag("NEST-OWU-PROJECT")
        .build();
    const document = SwaggerModule.createDocument(
        app,
        swagConfig
    );
    SwaggerModule.setup(
        "api",
        app,
        document
    );

    await app.listen(PORT, () => {
        console.log("Server has started on port: " + PORT);
    });
}

bootstrap();

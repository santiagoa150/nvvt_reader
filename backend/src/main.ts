import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExceptionsFilter } from './apps/shared/config/nest-exceptions.filter';
import * as process from 'process';

/**
 * Asynchronous function to start the application.\
 * Bootstraps the NestJS application.
 * @returns {Promise<void>}
 */
async function bootstrap(): Promise<void> {
    const logger: Logger = new Logger('BOOTSTRAP');
    const app: INestApplication = await NestFactory.create(AppModule);
    app.setGlobalPrefix(process.env.APP_PREFIX);
    const swaggerConfig = new DocumentBuilder()
        .setTitle(process.env.SWAGGER_TITLE)
        .addBearerAuth()
        .build();
    const documentation = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup(process.env.SWAGGER_URL, app, documentation);
    app.useGlobalFilters(new NestExceptionsFilter());
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.listen(process.env.APP_PORT);
    logger.log(`listening on port :: ${process.env.APP_PORT}`);
}

bootstrap();

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvSchema } from './config/env.schema';
import { CqrsModule } from '@nestjs/cqrs';
import { NestCqrsCaller } from '../../contexts/shared/infrastructure/nestjs/nest-cqrs-caller';
import { MongooseModule } from '@nestjs/mongoose';
import * as process from 'process';
import { DatabaseConstants } from '../../contexts/shared/domain/constants/database.constants';

/**
 * Shared module that exports configuration settings using NestJS ConfigModule.\
 * Configures the application with environment schema validation and includes CQRS support.
 * @class
 */
@Module({
    imports: [
        ConfigModule.forRoot({ validationSchema: EnvSchema, isGlobal: true }),
        MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URL, {
            connectionName: DatabaseConstants.DATABASE_CONNECTION_NAME,
        }),
        CqrsModule,
    ],
    providers: [NestCqrsCaller],
    exports: [
        ConfigModule,
        MongooseModule,
        CqrsModule,
        NestCqrsCaller,
    ],
})
export class SharedModule {
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvSchema } from './config/env.schema';

/**
 * Shared module that exports configuration settings using NestJS ConfigModule.\
 * Configures the application with environment schema validation.
 */
@Module({
  imports: [
    ConfigModule.forRoot({ validationSchema: EnvSchema, isGlobal: true }),
  ],
  exports: [ConfigModule],
})
export class SharedModule {}

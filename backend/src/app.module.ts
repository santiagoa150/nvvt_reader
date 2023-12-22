import { Module } from '@nestjs/common';
import { SharedModule } from './apps/shared/shared.module';

/**
 * Main application module that imports SharedModule.\
 * This module serves as the root module of the application.
 */
@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

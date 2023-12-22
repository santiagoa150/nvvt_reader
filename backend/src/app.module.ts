import { Module } from '@nestjs/common';
import { SharedModule } from './apps/shared/shared.module';
import { CampaignModule } from './apps/campaign/campaign.module';

/**
 * Main application module that imports SharedModule.\
 * This module serves as the root module of the application.
 * @class
 */
@Module({
  imports: [
      SharedModule,
      CampaignModule,
  ],
})
export class AppModule {}

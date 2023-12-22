import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { CampaignController } from './controller/campaign.controller';
import { CommandHandlers, EventHandlers, Providers, QueryHandlers } from './config/providers/providers';

/**
 * Module to handle Campaign-related functionalities.\
 * Includes controllers and providers for Campaign operations.
 * @class
 */
@Module({
    imports: [SharedModule],
    controllers: [CampaignController],
    providers: [
        ...Providers,
        ...QueryHandlers,
        ...CommandHandlers,
        ...EventHandlers,
    ],
})
export class CampaignModule {
}
import { FactoryProvider } from '@nestjs/common';
import {
    MongoCampaignRepository,
} from '../../../../contexts/campaign/infrastructure/mongodb/mongo-campaign.repository';
import { MongoCampaignConstants } from '../../../../contexts/campaign/infrastructure/mongodb/mongo-campaign.constants';
import { Model } from 'mongoose';
import { CampaignDocument } from '../../../../contexts/campaign/infrastructure/mongodb/mongo-campaign.model';

/**
 * Factory provider for the MongoCampaignRepository.
 * @type {FactoryProvider<MongoCampaignRepository>}
 */
export const MongoCampaignRepositoryProvider: FactoryProvider<MongoCampaignRepository> = {
    inject: [MongoCampaignConstants.DOCUMENT],
    provide: MongoCampaignRepository,
    useFactory(model: Model<CampaignDocument>): MongoCampaignRepository {
        return new MongoCampaignRepository(model);
    },
};
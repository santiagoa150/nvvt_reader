import { FactoryProvider } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import {
    CampaignDocument,
    CampaignSchema,
} from '../../../../contexts/campaign/infrastructure/mongodb/mongo-campaign.model';
import { getConnectionToken } from '@nestjs/mongoose';
import { DatabaseConstants } from '../../../../contexts/shared/domain/constants/database.constants';
import { MongoCampaignConstants } from '../../../../contexts/campaign/infrastructure/mongodb/mongo-campaign.constants';

/**
 * Factory provider for generating the MongoDB Campaign Model.
 * @type {FactoryProvider<Model<CampaignDocument>>}
 */
export const MongoCampaignModelProvider: FactoryProvider<Model<CampaignDocument>> = {
    inject: [getConnectionToken(DatabaseConstants.DATABASE_CONNECTION_NAME)],
    provide: MongoCampaignConstants.DOCUMENT,
    useFactory(connection: Connection): Model<CampaignDocument> {
        return connection.model<CampaignDocument>(MongoCampaignConstants.COLLECTION_NAME, CampaignSchema);
    },
};
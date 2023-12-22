import { CampaignRepository } from '../../domain/gateways/campaign.repository';
import { Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { CampaignDocument } from './mongo-campaign.model';

/**
 * MongoDB's implementation of the CampaignRepository interface.
 * @class
 * @implements {CampaignRepository}
 */
export class MongoCampaignRepository implements CampaignRepository {

    private readonly logger: Logger = new Logger(MongoCampaignRepository.name);

    /**
     * @param {Model<CampaignDocument>} model - Mongoose Model for CampaignDocument.
     * @constructor
     */
    constructor(private readonly model: Model<CampaignDocument>) {
    }
}
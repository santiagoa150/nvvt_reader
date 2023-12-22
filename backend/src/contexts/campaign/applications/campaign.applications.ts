import { CampaignRepository } from '../domain/gateways/campaign.repository';
import { Logger } from '@nestjs/common';

/**
 * Class responsible for handling Campaign-related applications.
 * @class
 */
export class CampaignApplications {

    private readonly logger: Logger = new Logger(CampaignApplications.name);

    /**
     * @param {CampaignRepository} repository - Repository for Campaign operations.
     * @constructor
     */
    constructor(private readonly repository: CampaignRepository) {
    }
}
import { CampaignId } from '../../../domain/campaign-id';
import { IQuery } from '@nestjs/cqrs';

/**
 * Represents a query to search for a campaign by its unique identifier.
 * @class
 * @implements {IQuery}
 */
export class SearchCampaignQuery implements IQuery {

    /**
     * @param {CampaignId} campaignId - The unique identifier of the campaign to search for.
     * @constructor
     */
    constructor(public readonly campaignId: CampaignId) {
    }
}
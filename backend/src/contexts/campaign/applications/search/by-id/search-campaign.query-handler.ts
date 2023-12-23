import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SearchCampaignQuery } from './search-campaign.query';
import { Campaign } from '../../../domain/campaign';
import { CampaignApplications } from '../../campaign.applications';

/**
 * Query handler for processing the SearchCampaignQuery to find a campaign by its identifier.
 * @class
 * @implements {IQueryHandler<SearchCampaignQuery, Campaign>}
 */
@QueryHandler(SearchCampaignQuery)
export class SearchCampaignQueryHandler implements IQueryHandler<SearchCampaignQuery, Campaign> {

    /**
     * @param {CampaignApplications} apps - An instance of CampaignApplications to execute the search.
     * @constructor
     */
    constructor(private readonly apps: CampaignApplications) {
    }

    /**
     * Executes the search for a campaign by its unique identifier.
     * @param {SearchCampaignQuery} query - The query containing the campaign identifier.
     * @returns {Promise<Campaign>} A Promise resolving to the found campaign or undefined.
     * @public
     */
    execute(query: SearchCampaignQuery): Promise<Campaign> {
        return this.apps.searchById(query.campaignId);
    }
}
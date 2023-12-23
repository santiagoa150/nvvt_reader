import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SearchPaginatedCampaignsQuery } from './search-paginated-campaigns.query';
import { PaginationType } from '../../../../shared/domain/types/pagination.type';
import { Campaign } from '../../../domain/campaign';
import { CampaignApplications } from '../../campaign.applications';

/**
 * Query handler for SearchPaginatedCampaignsQuery.
 * @class
 * @implements {IQueryHandler<SearchPaginatedCampaignsQuery, PaginationType<Campaign>>}
 */
@QueryHandler(SearchPaginatedCampaignsQuery)
export class SearchPaginatedCampaignsQueryHandler implements IQueryHandler<SearchPaginatedCampaignsQuery, PaginationType<Campaign>> {

    /**
     * @param {CampaignApplications} apps - The CampaignApplications service.
     * @constructor
     */
    constructor(private readonly apps: CampaignApplications) {
    }

    /**
     * Executes the search for paginated campaigns.
     * @param {SearchPaginatedCampaignsQuery} query - The SearchPaginatedCampaignsQuery containing page and limit.
     * @returns {Promise<PaginationType<Campaign>>} A Promise resolving to PaginationType containing Campaign data.
     * @public
     */
    execute(query: SearchPaginatedCampaignsQuery): Promise<PaginationType<Campaign>> {
        return this.apps.searchPaginated(query.page, query.limit);
    }
}
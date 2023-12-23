import { IQuery } from '@nestjs/cqrs';
import { PaginationPage } from '../../../../shared/domain/pagination-page';
import { PaginationLimit } from '../../../../shared/domain/pagination-limit';

/**
 * Represents a query to search for paginated campaigns.
 * @class
 * @implements {IQuery}
 */
export class SearchPaginatedCampaignsQuery implements IQuery {

    /**
     * @param {PaginationPage} page - The PaginationPage object for pagination.
     * @param {PaginationLimit} limit - The PaginationLimit object for pagination limit.
     * @constructor
     */
    constructor(
        public readonly page: PaginationPage,
        public readonly limit: PaginationLimit,
    ) {
    }
}
import { Campaign } from '../campaign';
import { CampaignId } from '../campaign-id';
import { PaginationPage } from '../../../shared/domain/pagination-page';
import { PaginationLimit } from '../../../shared/domain/pagination-limit';
import { PaginationType } from '../../../shared/domain/types/pagination.type';

/**
 * Interface defining the contract for interacting with Campaign entities in the data layer.
 * @interface
 */
export interface CampaignRepository {

    /**
     * Creates a new campaign.
     * @param {Campaign} campaign - The campaign object to be created.
     * @returns {Promise<Campaign>} - Promise resolving to the created campaign.
     */
    create(campaign: Campaign): Promise<Campaign>;

    /**
     * Searches for an active campaign.
     * @returns {Promise<Campaign | undefined>} - Promise resolving to the active campaign found, or undefined if not found.
     */
    searchActive(): Promise<Campaign | undefined>;

    /**
     * Searches for a campaign by its unique identifier.
     * @param {CampaignId} campaignId - The unique identifier of the campaign to search for.
     * @returns {Promise<Campaign | undefined>} - A promise resolving to the found campaign, or undefined if not found.
     */
    searchById(campaignId: CampaignId): Promise<Campaign | undefined>;

    /**
     * Searches for paginated Campaign data.
     * @param {PaginationPage} page - The PaginationPage object for pagination.
     * @param {PaginationLimit} limit - The PaginationLimit object for pagination limit.
     * @returns {PaginationType<Campaign>} PaginationType containing Campaign data.
     */
    searchPaginated(page: PaginationPage, limit: PaginationLimit): Promise<PaginationType<Campaign>>;
}
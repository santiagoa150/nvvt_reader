import { Campaign } from '../campaign';

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
}
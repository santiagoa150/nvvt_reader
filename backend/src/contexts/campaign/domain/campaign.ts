import { CampaignStatus } from './campaign-status';
import { CampaignId } from './campaign-id';

/**
 * Represents a campaign entity.
 * @class
 */
export class Campaign {

    public readonly campaignId: CampaignId;
    public readonly status: CampaignStatus;
    public readonly magazineUrl: string;
    public readonly prestigiousUrl: string;
    public readonly number: number;
    public readonly year: number;
    public readonly totalListPrice: number;
    public readonly totalCatalogPrice: number;
    public readonly totalProducts: number;

    /**
     * @param {CampaignId} campaignId - The unique identifier for the campaign.
     * @param {CampaignStatus} status - The status of the campaign.
     * @param {string} magazineUrl - URL for the magazine associated with the campaign.
     * @param {string} prestigiousUrl - URL for the prestigious associated with the campaign.
     * @param {number} number - Number identifying the campaign.
     * @param {number} year - Year of the campaign.
     * @param {number} totalListPrice - Total list price for the campaign.
     * @param {number} totalCatalogPrice - Total catalog price for the campaign.
     * @param {number} totalProducts - Total number of products in the campaign.
     * @constructor
     */
    constructor(
        campaignId: CampaignId,
        status: CampaignStatus,
        magazineUrl: string,
        prestigiousUrl: string,
        number: number,
        year: number,
        totalListPrice: number,
        totalCatalogPrice: number,
        totalProducts: number,
    ) {
        this.campaignId = campaignId;
        this.status = status;
        this.magazineUrl = magazineUrl;
        this.prestigiousUrl = prestigiousUrl;
        this.number = number;
        this.year = year;
        this.totalListPrice = totalListPrice;
        this.totalCatalogPrice = totalCatalogPrice;
        this.totalProducts = totalProducts;
    }
}
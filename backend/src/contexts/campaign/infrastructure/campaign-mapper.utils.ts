import { Campaign } from '../domain/campaign';
import { CampaignDto } from './campaign-dto';
import { CampaignId } from '../domain/campaign-id';
import { CampaignStatus } from '../domain/campaign-status';

/**
 * Utility class for mapping Campaign objects to CampaignDto objects and vice versa.
 * @abstract
 * @class
 */
export abstract class CampaignMapperUtils {

    /**
     * Maps a Campaign object to a CampaignDto object.
     * @param {Campaign} campaign - The Campaign object to be mapped.
     * @returns {CampaignDto} - The mapped CampaignDto object.
     * @public
     * @static
     */
    public static i2e(campaign: Campaign): CampaignDto {
        return {
            campaignId: campaign.campaignId.toString(),
            magazineUrl: campaign.magazineUrl,
            number: campaign.number,
            prestigiousUrl: campaign.prestigiousUrl,
            status: campaign.status.toString(),
            totalCatalogPrice: campaign.totalCatalogPrice,
            totalListPrice: campaign.totalListPrice,
            totalProducts: campaign.totalProducts,
            year: campaign.year,
        };
    }

    /**
     * Maps a CampaignDto object to a Campaign object.
     * @param {CampaignDto} dto - The CampaignDto object to be mapped.
     * @returns {Campaign} - The mapped Campaign object.
     * @public
     * @static
     */
    public static e2i(dto: CampaignDto): Campaign {
        return new Campaign(
            new CampaignId(dto.campaignId),
            new CampaignStatus(dto.status),
            dto.magazineUrl,
            dto.prestigiousUrl,
            dto.number,
            dto.year,
            dto.totalListPrice,
            dto.totalCatalogPrice,
            dto.totalProducts,
        );
    }
}
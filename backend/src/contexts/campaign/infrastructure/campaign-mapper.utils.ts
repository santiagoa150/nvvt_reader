import { Campaign } from '../domain/campaign';
import { CampaignDto } from './campaign-dto';
import { CampaignId } from '../domain/campaign-id';
import { CampaignStatus } from '../domain/campaign-status';
import { PaginationType } from '../../shared/domain/types/pagination.type';

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

    /**
     * Converts an array of Campaign to an array of CampaignDto.
     * @param {Array<Campaign>} campaigns - Array of Campaign objects to convert.
     * @returns {Array<CampaignDto>} Array of CampaignDto objects.
     * @public
     * @static
     */
    public static mi2me(campaigns: Array<Campaign>): Array<CampaignDto> {
        return campaigns.map(this.i2e);
    }

    /**
     * Converts an array of CampaignDto to an array of Campaign.
     * @param {Array<CampaignDto>} dto - Array of CampaignDto objects to convert.
     * @returns {Array<Campaign>} Array of Campaign objects.
     * @public
     * @static
     */
    public static me2mi(dto: Array<CampaignDto>): Array<Campaign> {
        return dto.map(this.e2i);
    }

    /**
     * Converts PaginationType of CampaignDto to PaginationType of Campaign.
     * @param {PaginationType<CampaignDto>} paginatedDto - PaginationType of CampaignDto to convert.
     * @returns {PaginationType<Campaign>} PaginationType of Campaign.
     * @public
     * @static
     */
    public static pe2pi(paginatedDto: PaginationType<CampaignDto>): PaginationType<Campaign> {
        return { data: this.me2mi(paginatedDto.data), metadata: paginatedDto.metadata };
    }

    /**
     * Converts PaginationType of Campaign to PaginationType of CampaignDto.
     * @param {PaginationType<Campaign>} paginatedCampaigns - PaginationType of Campaign to convert.
     * @returns {PaginationType<CampaignDto>} PaginationType of CampaignDto.
     * @public
     * @static
     */
    public static pi2pe(paginatedCampaigns: PaginationType<Campaign>): PaginationType<CampaignDto> {
        return { data: this.mi2me(paginatedCampaigns.data), metadata: paginatedCampaigns.metadata };
    }
}
import { CampaignRepository } from '../domain/gateways/campaign.repository';
import { Logger } from '@nestjs/common';
import { Campaign } from '../domain/campaign';
import { CampaignId } from '../domain/campaign-id';
import { CampaignStatus } from '../domain/campaign-status';
import { CampaignStatusConstants } from '../domain/campaign-status.constants';
import { CampaignNotFoundException } from '../domain/exceptions/campaign-not-found.exception';
import {
    ThereIsAlreadyAnActiveCampaignException,
} from '../domain/exceptions/there-is-already-an-active-campaign.exception';

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

    /**
     * Creates a new campaign with provided details.
     * @async
     * @param {string} magazineUrl - The URL of the magazine associated with the campaign.
     * @param {string} prestigiousUrl - The prestigious URL associated with the campaign.
     * @param {number} number - The number of the campaign.
     * @param {number} year - The year of the campaign.
     * @returns {Promise<Campaign>} - The created campaign.
     * @throws {ThereIsAlreadyAnActiveCampaignException} - Thrown if an active campaign already exists.
     */
    async create(magazineUrl: string, prestigiousUrl: string, number: number, year: number): Promise<Campaign> {
        this.logger.log(`[${this.create.name}] INIT ::`);
        if (await this.searchActive(false)) throw new ThereIsAlreadyAnActiveCampaignException();
        const campaign: Campaign = new Campaign(
            CampaignId.generate(),
            new CampaignStatus(CampaignStatusConstants.ACTIVE),
            magazineUrl,
            prestigiousUrl,
            number,
            year,
            0, 0, 0,
        );
        const created: Campaign = await this.repository.create(campaign);
        this.logger.log(`[${this.create.name}] FINISH ::`);
        return created;
    }

    /**
     * Searches for an active campaign.
     * @param {boolean} throwExceptionIfNotfound - Flag to determine whether to throw an exception if no campaign is found.
     * @returns {Promise<Campaign | undefined>} The active campaign if found, otherwise undefined.
     * @throws {CampaignNotFoundException} Thrown if no active campaign is found and 'throwExceptionIfNotfound' is true.
     * @public
     * @async
     */
    async searchActive(throwExceptionIfNotfound: boolean = true): Promise<Campaign | undefined> {
        this.logger.log(`[${this.searchActive.name}] INIT ::`);
        const campaign: Campaign | undefined = await this.repository.searchActive();
        if (throwExceptionIfNotfound && !campaign) throw new CampaignNotFoundException();
        this.logger.log(`[${this.searchActive.name}] FINISH ::`);
        return campaign;
    }
}
import { CampaignRepository } from '../../domain/gateways/campaign.repository';
import { Logger } from '@nestjs/common';
import { Model, PipelineStage } from 'mongoose';
import { CampaignDocument } from './mongo-campaign.model';
import { Campaign } from '../../domain/campaign';
import { CampaignMapperUtils } from '../campaign-mapper.utils';
import { CampaignStatusConstants } from '../../domain/campaign-status.constants';
import { CampaignId } from '../../domain/campaign-id';
import { PaginationPage } from '../../../shared/domain/pagination-page';
import { PaginationLimit } from '../../../shared/domain/pagination-limit';
import { PaginationType } from '../../../shared/domain/types/pagination.type';
import { MongodbUtils } from '../../../shared/infrastructure/mongodb/mongodb.utils';

/**
 * MongoDB's implementation of the CampaignRepository interface.
 * @class
 * @implements {CampaignRepository}
 */
export class MongoCampaignRepository implements CampaignRepository {

    private readonly logger: Logger = new Logger(MongoCampaignRepository.name);

    /**
     * @param {Model<CampaignDocument>} model - Mongoose Model for CampaignDocument.
     * @constructor
     */
    constructor(private readonly model: Model<CampaignDocument>) {
    }

    /**
     * Creates a new Campaign entity in the database based on the provided Campaign object.
     * @param {Campaign} campaign - The Campaign object to be created in the database.
     * @returns {Promise<Campaign>} - A Promise resolving to the created Campaign object.
     * @public
     * @async
     */
    async create(campaign: Campaign): Promise<Campaign> {
        this.logger.log(`[${this.create.name}] INIT ::`);
        const model = new this.model(CampaignMapperUtils.i2e(campaign));
        await model.save();
        const mapped: Campaign = CampaignMapperUtils.e2i(model);
        this.logger.log(`[${this.create.name}] FINISH ::`);
        return mapped;
    }

    /**
     * Searches for an active Campaign in the database and returns it if found.
     * @returns {Promise<Campaign | undefined>} - A Promise resolving to the found active Campaign or undefined if not found.
     * @public
     * @async
     */
    async searchActive(): Promise<Campaign | undefined> {
        this.logger.log(`[${this.searchActive.name}] INIT ::`);
        const found: CampaignDocument = await this.model.findOne({ status: CampaignStatusConstants.ACTIVE });
        const mapped: Campaign = found ? CampaignMapperUtils.e2i(found) : undefined;
        this.logger.log(`[${this.searchActive.name}] FINISH ::`);
        return mapped;
    }

    /**
     * Searches for a campaign by its unique identifier.
     * @param {CampaignId} campaignId - The unique identifier of the campaign to search for.
     * @returns {Promise<Campaign | undefined>} - A promise resolving to the found campaign or undefined if not found.
     * @public
     * @async
     */
    async searchById(campaignId: CampaignId): Promise<Campaign | undefined> {
        this.logger.log(`[${this.searchById.name}] INIT :: campaignId: ${campaignId.toString()}`);
        const found: CampaignDocument = await this.model.findOne({ campaignId: campaignId.toString() });
        const mapped: Campaign = found ? CampaignMapperUtils.e2i(found) : undefined;
        this.logger.log(`[${this.searchById.name}] FINISH ::`);
        return mapped;
    }

    /**
     * Searches for paginated Campaign data.
     * @param {PaginationPage} page - The PaginationPage object for pagination.
     * @param {PaginationLimit} limit - The PaginationLimit object for pagination limit.
     * @returns {PaginationType<Campaign>} A Promise resolving to PaginationType containing Campaign data.
     * @public
     * @async
     */
    async searchPaginated(page: PaginationPage, limit: PaginationLimit): Promise<PaginationType<Campaign>> {
        this.logger.log(`[${this.searchPaginated.name}] INIT :: page: ${page.toNumber()}, limit: ${limit.toNumber()}`);
        const query: Array<PipelineStage> = MongodbUtils.buildPaginationQuery(page, limit);
        const found: Array<PaginationType<CampaignDocument>> = await this.model.aggregate<PaginationType<CampaignDocument>>(query);
        const mapped: PaginationType<Campaign> = found && found[0] ? CampaignMapperUtils.pe2pi(found[0]) : new PaginationType<Campaign>();
        this.logger.log(`[${this.searchPaginated.name}] FINISH ::`);
        return mapped;
    }
}
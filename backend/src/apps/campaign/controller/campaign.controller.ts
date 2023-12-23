import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CampaignHttpConstants } from '../config/campaign-http.constants';
import { ApiAcceptedResponse, ApiTags } from '@nestjs/swagger';
import { NestCqrsCaller } from '../../../contexts/shared/infrastructure/nestjs/nest-cqrs-caller';
import { DefaultHttpResponse } from '../../../contexts/shared/infrastructure/nestjs/default-http.response';
import { Campaign } from '../../../contexts/campaign/domain/campaign';
import { CreateCampaignCommand } from '../../../contexts/campaign/applications/create/create-campaign.command';
import { CreateCampaignRequest } from './requests/create-campaign.request';
import { SearchCampaignByIdResponse } from './responses/search-campaign-by-id.response';
import { SearchCampaignQuery } from '../../../contexts/campaign/applications/search/by-id/search-campaign.query';
import { CampaignId } from '../../../contexts/campaign/domain/campaign-id';
import { CampaignMapperUtils } from '../../../contexts/campaign/infrastructure/campaign-mapper.utils';
import { SearchCampaignByIdRequest } from './requests/search-campaign-by-id.request';
import { SearchPaginatedCampaignsResponse } from './responses/search-paginated-campaigns.response';
import { SearchPaginatedCampaignsRequest } from './requests/search-paginated-campaigns.request';
import { PaginationType } from '../../../contexts/shared/domain/types/pagination.type';
import {
    SearchPaginatedCampaignsQuery,
} from '../../../contexts/campaign/applications/search/paginated/search-paginated-campaigns.query';
import { PaginationPage } from '../../../contexts/shared/domain/pagination-page';
import { PaginationLimit } from '../../../contexts/shared/domain/pagination-limit';

/**
 * Controller handling HTTP requests related to campaigns.\
 * Uses the prefix and tags defined in CampaignHttpConstants for routing and documentation.
 * @class
 */
@Controller(CampaignHttpConstants.PREFIX)
@ApiTags(CampaignHttpConstants.TAG)
export class CampaignController {

    /**
     * @param {NestCqrsCaller} cqrsCaller - CQRS caller for interacting with CQRS operations.
     * @constructor
     */
    constructor(private readonly cqrsCaller: NestCqrsCaller) {
    }

    /**
     * Endpoint to create a new campaign.
     * @param {CreateCampaignRequest} body - The request body containing campaign data.
     * @returns {Promise<DefaultHttpResponse>} - Default response for the request.
     * @public
     * @async
     */
    @Post()
    @ApiAcceptedResponse({ type: DefaultHttpResponse })
    async create(@Body() body: CreateCampaignRequest): Promise<DefaultHttpResponse> {
        const response: DefaultHttpResponse = new DefaultHttpResponse();
        await this.cqrsCaller.dispatch<Campaign>(new CreateCampaignCommand(
            body.magazineUrl, body.prestigiousUrl, body.number, body.year,
        ));
        return response;
    }

    /**
     * Endpoint to retrieve a campaign by ID.
     * @param {SearchCampaignByIdRequest} query - Query parameters containing the campaign ID.
     * @returns {SearchCampaignByIdResponse} A response object containing the campaign data.
     * @public
     * @async
     */
    @Get()
    @ApiAcceptedResponse({ type: SearchCampaignByIdResponse })
    async searchById(@Query() query: SearchCampaignByIdRequest): Promise<SearchCampaignByIdResponse> {
        const response: SearchCampaignByIdResponse = new SearchCampaignByIdResponse();
        const campaign: Campaign = await this.cqrsCaller.query<Campaign>(new SearchCampaignQuery(
            new CampaignId(query.campaignId),
        ));
        response.data = CampaignMapperUtils.i2e(campaign);
        return response;
    }

    /**
     * Retrieves paginated campaigns based on query parameters.
     * @param {SearchPaginatedCampaignsRequest} query - The SearchPaginatedCampaignsRequest object containing pagination details.
     * @returns {SearchPaginatedCampaignsResponse} A Promise resolving to SearchPaginatedCampaignsResponse with paginated campaign data.
     * @public
     * @async
     */
    @Get(CampaignHttpConstants.URL_GET_PAGINATED)
    @ApiAcceptedResponse({ type: SearchPaginatedCampaignsResponse })
    async searchPaginated(@Query() query: SearchPaginatedCampaignsRequest): Promise<SearchPaginatedCampaignsResponse> {
        const response: SearchPaginatedCampaignsResponse = new SearchPaginatedCampaignsResponse();
        const data: PaginationType<Campaign> = await this.cqrsCaller.query<PaginationType<Campaign>>(
            new SearchPaginatedCampaignsQuery(
                new PaginationPage(query.page), new PaginationLimit(query.limit),
            ));
        response.metadata = data.metadata;
        response.data = data.data.map((c: Campaign) => {
            return {
                campaignId: c.campaignId.toString(),
                number: c.number,
                year: c.year,
                magazineUrl: c.magazineUrl,
                status: c.status.toString(),
            };
        });
        return response;
    }
}
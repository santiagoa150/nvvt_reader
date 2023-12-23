import { Body, Controller, Post } from '@nestjs/common';
import { CampaignHttpConstants } from '../config/campaign-http.constants';
import { ApiAcceptedResponse, ApiTags } from '@nestjs/swagger';
import { NestCqrsCaller } from '../../../contexts/shared/infrastructure/nestjs/nest-cqrs-caller';
import { DefaultHttpResponse } from '../../../contexts/shared/infrastructure/nestjs/default-http.response';
import { Campaign } from '../../../contexts/campaign/domain/campaign';
import { CreateCampaignCommand } from '../../../contexts/campaign/applications/create/create-campaign.command';
import { CreateCampaignRequest } from './requests/create-campaign.request';

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
}
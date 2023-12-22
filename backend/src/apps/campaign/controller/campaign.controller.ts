import { Controller } from '@nestjs/common';
import { CampaignHttpConstants } from '../config/campaign-http.constants';
import { ApiTags } from '@nestjs/swagger';
import { NestCqrsCaller } from '../../../contexts/shared/infrastructure/nestjs/nest-cqrs-caller';

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
}
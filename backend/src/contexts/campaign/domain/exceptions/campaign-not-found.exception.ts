import { ExceptionCore } from '../../../shared/domain/exceptions/exception-core';
import { CampaignExceptionConstants } from './campaign-exception.constants';
import { HttpStatus } from '@nestjs/common';

/**
 * Exception raised when a campaign is not found.\
 * Extends ExceptionCore for customized exception handling.
 * @class
 * @extends {ExceptionCore}
 */
export class CampaignNotFoundException extends ExceptionCore {

    /**
     * Constructor for CampaignStatusNotValidException.\
     * Initializes the exception message and HTTP status.
     * @constructor
     */
    constructor() {
        super(
            CampaignExceptionConstants.CAMPAIGN_NOT_FOUND,
            HttpStatus.NOT_FOUND,
        );
    }
}
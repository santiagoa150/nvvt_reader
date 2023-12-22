import { ExceptionCore } from '../../../shared/domain/exception-core';
import { CampaignExceptionConstants } from './campaign-exception.constants';
import { HttpStatus } from '@nestjs/common';

/**
 * Exception raised when a campaign status is not valid.\
 * Extends ExceptionCore for customized exception handling.
 * @class
 * @extends {ExceptionCore}
 */
export class CampaignStatusNotValidException extends ExceptionCore {

    /**
     * Constructor for CampaignStatusNotValidException.\
     * Initializes the exception message and HTTP status.
     * @constructor
     */
    constructor() {
        super(
            CampaignExceptionConstants.CAMPAIGN_STATUS_NOT_VALID,
            HttpStatus.BAD_REQUEST,
        );
    }
}
import { ExceptionCore } from '../../../shared/domain/exception-core';
import { CampaignExceptionConstants } from './campaign-exception.constants';
import { HttpStatus } from '@nestjs/common';

/**
 * Exception thrown when there is already an active campaign.\
 * Extends the base ExceptionCore class.
 * @class
 * @extends {ExceptionCore}
 */
export class ThereIsAlreadyAnActiveCampaignException extends ExceptionCore {

    /**
     * Initializes the exception message and HTTP status.
     * @constructor
     */
    constructor() {
        super(
            CampaignExceptionConstants.THERE_IS_ALREADY_AN_ACTIVE_CAMPAIGN,
            HttpStatus.CONFLICT,
        );
    }
}
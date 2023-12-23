import { ExceptionCore } from './exception-core';
import { SharedExceptionConstants } from './shared-exception.constants';
import { HttpStatus } from '@nestjs/common';

/**
 * Represents an exception for when the pagination parameter provided is not greater than zero.
 * @class
 * @extends ExceptionCore
 */
export class PaginationParamMustBeGraterThanZeroException extends ExceptionCore {

    /**
     * @constructor
     */
    constructor() {
        super(
            SharedExceptionConstants.PAGINATION_PARAM_MUST_BE_GREATER_THAN_ZERO,
            HttpStatus.BAD_REQUEST,
        );
    }
}
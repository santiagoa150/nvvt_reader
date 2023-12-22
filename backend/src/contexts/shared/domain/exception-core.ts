import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Custom exception class extending HttpException from NestJS.\
 * Allows creating custom exceptions with a specified status code and message.
 * @class
 */
export class ExceptionCore extends HttpException {

    /**
     * @constructor
     * @param {string} customMessage - Custom message to be included in the exception.
     * @param {HttpStatus} status - HTTP status code for the exception.
     */
    constructor(
        public readonly customMessage: string,
        status: HttpStatus,
    ) {
        super({ message: customMessage }, status);
    }
}
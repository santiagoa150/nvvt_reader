import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ExceptionCore } from '../../../contexts/shared/domain/exceptions/exception-core';
import { ExceptionResponse } from '../../../contexts/shared/domain/exceptions/exception-response';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { SharedExceptionConstants } from '../../../contexts/shared/domain/exceptions/shared-exception.constants';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Response } from 'express';

/**
 * Custom exception filter to handle and format various exceptions in the NestJS application.
 * @class
 */
@Catch()
export class NestExceptionsFilter implements ExceptionFilter {

    private readonly logger: Logger = new Logger(NestExceptionsFilter.name);

    /**
     * Resolves the message from the exception.
     * @param {unknown} exception - The exception object.
     * @returns {string} - Resolved exception message.
     * @static
     * @private
     */
    private static resolveMessage(exception: unknown): string {
        let data: Array<string> | string = null;
        switch (typeof exception) {
            case 'object':
                if ('response' in exception) {
                    if (
                        typeof exception.response === 'object' &&
                        'message' in exception.response
                    ) {
                        data = Array.isArray(exception.response.message)
                            ? exception.response.message
                            : String(exception.response.message);
                    } else {
                        data = Array.isArray(exception.response)
                            ? exception.response
                            : String(exception.response);
                    }
                } else if ('message' in exception) {
                    data = Array.isArray(exception.message)
                        ? exception.message
                        : String(exception.message);
                } else {
                    data = Array.isArray(exception) ? exception : null;
                }
                break;
            case 'string':
                return exception;
        }
        if (Array.isArray(data)) {
            return data?.join(', ');
        } else if (typeof data === 'string') {
            return data;
        }
        return data;
    }

    /**
     * Catches and handles exceptions.
     * @param {Error} exception - The caught exception.
     * @param {ArgumentsHost} host - Arguments host containing details about the request context.
     * @returns {unknown} - Response or null if the protocol is not supported.
     * @public
     */
    catch(exception: Error, host: ArgumentsHost): unknown {
        this.logger.error(JSON.stringify(exception));
        const response: ExceptionResponse = new ExceptionResponse();
        response.timestamp = new Date().toISOString();
        if (exception instanceof ExceptionCore) {
            response.httpCode = exception.getStatus();
            response.message = exception.message;
        } else if (exception instanceof HttpException) {
            response.httpCode = exception.getStatus();
            response.message = NestExceptionsFilter.resolveMessage(exception) ?? HttpErrorByCode[response.httpCode]?.name;
        } else {
            response.message = NestExceptionsFilter.resolveMessage(exception) ?? SharedExceptionConstants.INTERNAL_SERVER_ERROR;
            response.httpCode = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        if (!response.message) response.message = SharedExceptionConstants.INTERNAL_SERVER_ERROR;
        return this.dispatchResponse(host, response);
    }

    /**
     * Dispatches the formatted response based on the exception type and protocol.
     * @param {ArgumentsHost} host - Arguments host containing details about the request context.
     * @param {ExceptionResponse} mappedResponse - Formatted exception response object.
     * @returns {unknown} - Response or null if the protocol is not supported.
     * @private
     */
    private dispatchResponse(host: ArgumentsHost, mappedResponse: ExceptionResponse): unknown {
        let context: HttpArgumentsHost, response: Response;
        switch (host.getType()) {
            case 'http':
                context = host.switchToHttp();
                response = context.getResponse<Response>();
                response.status(mappedResponse.httpCode).json(mappedResponse);
                break;
            default:
                this.logger.error(`[${this.dispatchResponse.name}] PROTOCOL NOT SUPPORTED`);
                return null;
        }
    }
}

import { ApiProperty } from '@nestjs/swagger';

/**
 * Class defining the structure of the exception response.
 */
export class ExceptionResponse {
    /**
     * Indicates whether the operation was successful.
     * @type {boolean}
     */
    @ApiProperty({ description: 'Indicates whether the operation was successful.' })
    readonly success: boolean = false;
    /**
     * Timestamp when the exception occurred.
     * @type {string}
     */
    @ApiProperty({ description: 'Timestamp when the exception occurred.' })
    timestamp: string;
    /**
     * HTTP status code related to the exception.
     * @type {number}
     */
    @ApiProperty({ description: 'HTTP status code related to the exception.' })
    httpCode: number;
    /**
     * Description or message related to the exception.
     * @type {string}
     */
    @ApiProperty({ description: 'Description or message related to the exception.' })
    message: string;
}
import { ApiProperty } from '@nestjs/swagger';

/**
 * Represents metadata information.
 * @class
 */
export class MetadataType {
    /**
     * The page on which the paginated method is found.
     * @default 0
     * @type {number}
     */
    @ApiProperty() page: number = 0;
    /**
     * The total number of elements that can be paginated.
     * @default 0
     * @type {number}
     */
    @ApiProperty() total: number = 0;
    /**
     * The total number of pages that can be paginated.
     * @default 0
     * @type {number}
     */
    @ApiProperty() totalPages: number = 0;
}
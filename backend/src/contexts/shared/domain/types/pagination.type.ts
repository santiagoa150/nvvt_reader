import { MetadataType } from './metadata.type';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Represents Pagination information.
 * @template T - The type of data contained in the pagination.
 * @class
 */
export class PaginationType<T> {
    /**
     * Array of data of type T.
     * @default []
     */
    @ApiProperty() data: Array<T> = [];

    /**
     * Metadata information.
     * @default new MetadataType()
     */
    @ApiProperty({ type: MetadataType }) metadata: MetadataType = new MetadataType();
}
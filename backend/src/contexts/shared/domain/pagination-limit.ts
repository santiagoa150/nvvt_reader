import { PaginationValueObject } from './value-object/pagination.value-object';

/**
 * Represents a Pagination Limit extending PaginationValueObject.\
 * Ensures the value is floored to the nearest integer.
 * @class
 * @extends PaginationValueObject
 */
export class PaginationLimit extends PaginationValueObject {

    /**
     * @param value - The numeric value for pagination limit.
     * @constructor
     */
    constructor(value: number) {
        super(Math.floor(value));
    }
}
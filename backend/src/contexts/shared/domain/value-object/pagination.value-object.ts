import { NumberValueObject } from './number.value-object';
import {
    PaginationParamMustBeGraterThanZeroException,
} from '../exceptions/pagination-param-must-be-grater-than-zero.exception';

/**
 * Represents a Pagination Value Object extending NumberValueObject.\
 * Ensures that the pagination value is greater than zero.
 * @class
 * @extends NumberValueObject
 */
export class PaginationValueObject extends NumberValueObject {

    /**
     * @param value - The numeric value for pagination.
     * @constructor
     */
    constructor(value: number) {
        PaginationValueObject.ensureIsGreaterThanZero(value);
        super(value);
    }

    /**
     * Ensures the value is greater than zero, throws an exception if not.
     * @param value - The numeric value to validate.
     * @throws {PaginationParamMustBeGraterThanZeroException} - If the value is less than or equal to zero.
     * @private
     * @static
     */
    private static ensureIsGreaterThanZero(value: number): void {
        if (value <= 0) new PaginationParamMustBeGraterThanZeroException();
    }
}
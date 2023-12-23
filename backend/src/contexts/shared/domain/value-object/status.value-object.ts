import { StringValueObject } from './string.value-object';
import { ExceptionCore } from '../exceptions/exception-core';

/**
 * Represents a value object for status strings, extending StringValueObject.
 * @class
 * @extends {StringValueObject}
 */
export class StatusValueObject extends StringValueObject {

    /**
     * @param {string} value - The value for the status.
     * @param {Record<string, string>} enumeration - An enumeration of valid status values.
     * @param {ExceptionCore} exception - The exception to throw if the provided value is invalid.
     * @constructor
     */
    constructor(
        value: string,
        enumeration: Record<string, string>,
        exception: ExceptionCore,
    ) {
        StatusValueObject.ensureIsValidParam(value, enumeration, exception);
        super(value);
    }

    /**
     * Ensures that the provided value is valid based on the enumeration.
     * @param {string} value - The value to validate.
     * @param {Record<string, string>} enumeration - An enumeration of valid status values.
     * @param {ExceptionCore} exception - The exception to throw if the provided value is invalid.
     * @private
     * @static
     */
    private static ensureIsValidParam(
        value: string,
        enumeration: Record<string, string>,
        exception: ExceptionCore,
    ): void {
        if (!(value in enumeration)) throw exception;
    }
}
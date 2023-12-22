import { StringValueObject } from './string.value-object';
import { v4 } from 'uuid';

/**
 * Abstract class representing an ID value object, extending StringValueObject.
 * @class
 * @extends {StringValueObject}
 */
export class IdValueObject extends StringValueObject {

    /**
     * @param {string} value - The value for the ID.
     * @constructor
     */
    constructor(value: string) {
        super(value);
    }

    /**
     * Abstract method to be implemented by subclasses for generating an ID.
     * @returns {string} - The generated ID.
     * @protected
     * @static
     */
    protected static generalGeneration(): string {
        return v4();
    };
}
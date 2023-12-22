/**
 * Value object representing a string value.
 * @class
 */
export class StringValueObject {

    /**
     * Private member storing the string value.
     * @private
     * @type {string}
     */
    private readonly value: string;

    /**
     * @constructor
     * @param {string} value - The string value to be encapsulated.
     */
    constructor(value: string) {
        this.value = value;
    }

    /**
     * Converts the string value object to its string representation.
     * @returns {string} - The string value.
     * @public
     */
    public toString(): string {
        return this.value;
    }
}
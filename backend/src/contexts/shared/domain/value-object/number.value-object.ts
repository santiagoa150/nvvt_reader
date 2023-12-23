/**
 * Represents a Number Value Object.
 * @class
 */
export class NumberValueObject {

    /**
     * The numeric value stored in the Number Value Object.
     * @private
     * @type {number}
     */
    private readonly value: number;

    /**
     * @param {number} value - The numeric value for the Number Value Object.
     * @constructor
     */
    constructor(value: number) {
        this.value = value;
    }

    /**
     * Returns the numeric value.
     * @returns {number} - The numeric value.
     * @public
     */
    public toNumber(): number {
        return this.value;
    }
}
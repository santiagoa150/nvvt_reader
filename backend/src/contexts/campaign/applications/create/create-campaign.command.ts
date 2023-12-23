import { ICommand } from '@nestjs/cqrs';

/**
 * Represents a command to create a new Campaign.
 * @class
 * @implements {ICommand}
 */
export class CreateCampaignCommand implements ICommand{

    /**
     * @constructor
     * @param {string} magazineUrl - The URL of the magazine associated with the Campaign.
     * @param {string} prestigiousUrl - The prestigious URL associated with the Campaign.
     * @param {number} number - The number associated with the Campaign.
     * @param {number} year - The year associated with the Campaign.
     */
    constructor(
        public readonly magazineUrl: string,
        public readonly prestigiousUrl: string,
        public readonly number: number,
        public readonly year: number,
    ) {
    }
}
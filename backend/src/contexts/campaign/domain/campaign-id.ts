import { IdValueObject } from '../../shared/domain/value-object/id.value-object';

/**
 * Represents an ID value object specific to a campaign.\
 * Extends IdValueObject.
 * @class
 * @extends {IdValueObject}
 */
export class CampaignId extends IdValueObject {

    /**
     * Static method to generate a new CampaignId instance.
     * @returns {CampaignId} - The generated CampaignId.
     * @public
     * @static
     */
    public static generate(): CampaignId {
        return new CampaignId(IdValueObject.generalGeneration());
    }
}
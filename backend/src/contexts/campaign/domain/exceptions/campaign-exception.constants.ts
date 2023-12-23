/**
 * Constants related to campaign exceptions.
 * @enum
 * @type {string}
 */
export enum CampaignExceptionConstants {
    /**
     * Error message for when a campaign is not found.
     */
    CAMPAIGN_NOT_FOUND = 'CAMPAIGN_NOT_FOUND',
    /**
     * Error message for an invalid campaign status.
     */
    CAMPAIGN_STATUS_NOT_VALID = 'CAMPAIGN_STATUS_NOT_VALID',
    /**
     * Error message for when there is already an active campaign.
     */
    THERE_IS_ALREADY_AN_ACTIVE_CAMPAIGN = 'THERE_IS_ALREADY_AN_ACTIVE_CAMPAIGN',
}
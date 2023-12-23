import { PickType } from '@nestjs/swagger';
import { CampaignDto } from '../../../../contexts/campaign/infrastructure/campaign-dto';

/**
 * Request structure for searching a campaign by its ID.
 * Picks the 'campaignId' property from CampaignDto.
 * @extends {PickType(CampaignDto, ['...'])}
 */
export class SearchCampaignByIdRequest extends PickType(
    CampaignDto, ['campaignId'],
) {
}
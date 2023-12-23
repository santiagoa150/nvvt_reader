import { PickType } from '@nestjs/swagger';
import { CampaignDto } from '../../../../contexts/campaign/infrastructure/campaign-dto';

/**
 * Represents the request body for creating a new campaign, picking specific fields from CampaignDto.
 * @class
 * @extends {PickType(CampaignDto, ['...'])}
 */
export class CreateCampaignRequest extends PickType(
    CampaignDto, ['magazineUrl', 'prestigiousUrl', 'number', 'year'],
) {
}
import { DefaultHttpResponse } from '../../../../contexts/shared/infrastructure/nestjs/default-http.response';
import { ApiProperty } from '@nestjs/swagger';
import { CampaignDto } from '../../../../contexts/campaign/infrastructure/campaign-dto';

/**
 * Response structure for the search campaign by ID operation.\
 * Extends the DefaultHttpResponse class.
 * @class
 * @extends {DefaultHttpResponse}
 */
export class SearchCampaignByIdResponse extends DefaultHttpResponse {
    /**
     * Data property holding the details of the found campaign.
     * @type {CampaignDto}
     */
    @ApiProperty({ type: CampaignDto }) data: CampaignDto;
}
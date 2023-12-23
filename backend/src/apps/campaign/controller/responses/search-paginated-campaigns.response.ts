import { ApiProperty } from '@nestjs/swagger';
import { MetadataType } from '../../../../contexts/shared/domain/types/metadata.type';

class PaginatedCampaignsData {
    @ApiProperty() campaignId: string;
    @ApiProperty() status: string;
    @ApiProperty() number: number;
    @ApiProperty() year: number;
    @ApiProperty() magazineUrl: string;
}

export class SearchPaginatedCampaignsResponse {
    @ApiProperty({ type: [PaginatedCampaignsData] }) data: Array<PaginatedCampaignsData>;
    @ApiProperty({ type: MetadataType }) metadata: MetadataType;
}
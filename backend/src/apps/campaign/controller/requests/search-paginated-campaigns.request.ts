import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import {
    ValidationMessagesConstants,
} from '../../../../contexts/shared/domain/constants/validation-messages.constants';

export class SearchPaginatedCampaignsRequest {

    @ApiProperty({ required: true })
    @IsPositive({ message: ValidationMessagesConstants.PAGINATION_LIMIT_MUST_BE_GREATER_THAN_ZERO })
    @IsInt({ message: ValidationMessagesConstants.PAGINATION_LIMIT_MUST_BE_INTEGER })
    @IsNotEmpty({ message: ValidationMessagesConstants.PAGINATION_LIMIT_IS_REQUIRED })
    @Type(() => Number)
    limit: number;

    @ApiProperty({ required: true })
    @IsPositive({ message: ValidationMessagesConstants.PAGINATION_PAGE_MUST_BE_GREATER_THAN_ZERO })
    @IsInt({ message: ValidationMessagesConstants.PAGINATION_PAGE_MUST_BE_INTEGER })
    @IsNotEmpty({ message: ValidationMessagesConstants.PAGINATION_PAGE_IS_REQUIRED })
    @Type(() => Number)
    page: number;
}
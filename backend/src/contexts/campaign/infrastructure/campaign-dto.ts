import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { ValidationMessagesConstants } from '../../shared/domain/constants/validation-messages.constants';
import { NumOptionsConst } from '../../shared/infrastructure/nestjs/number-options.constant';

/**
 * DTO (Data Transfer Object) for Campaign data.
 * @class
 */
export class CampaignDto {

    /**
     * Campaign ID.
     * @type {string}
     */
    @ApiProperty({ required: true, description: 'Campaign ID.' })
    @IsString({ message: ValidationMessagesConstants.CAMPAIGN_ID_MUST_BE_STRING })
    @IsNotEmpty({ message: ValidationMessagesConstants.CAMPAIGN_ID_IS_REQUIRED })
    campaignId: string;

    /**
     * Campaign status.
     * @type {string}
     */
    @ApiProperty({ required: true, description: 'Campaign status.' })
    @IsString({ message: ValidationMessagesConstants.CAMPAIGN_STATUS_MUST_BE_STRING })
    @IsNotEmpty({ message: ValidationMessagesConstants.CAMPAIGN_STATUS_IS_REQUIRED })
    status: string;

    /**
     * URL for the campaign's magazine.
     * @type {string}
     */
    @ApiProperty({ required: true, description: 'URL for the campaign\'s magazine.' })
    @IsString({ message: ValidationMessagesConstants.MAGAZINE_URL_MUST_BE_STRING })
    @IsNotEmpty({ message: ValidationMessagesConstants.MAGAZINE_URL_IS_REQUIRED })
    magazineUrl: string;

    /**
     * URL for the campaign's prestigious content.
     * @type {string}
     */
    @ApiProperty({ required: true, description: 'URL for the campaign\'s prestigious content.' })
    @IsString({ message: ValidationMessagesConstants.PRESTIGIOUS_URL_MUST_BE_STRING })
    @IsNotEmpty({ message: ValidationMessagesConstants.PRESTIGIOUS_URL_IS_REQUIRED })
    prestigiousUrl: string;

    /**
     * Campaign number.
     * @type {number}
     */
    @ApiProperty({ required: true, description: 'Campaign number.' })
    @IsPositive({ message: ValidationMessagesConstants.CAMPAIGN_NUMBER_MUST_BE_POSITIVE })
    @IsInt({ message: ValidationMessagesConstants.CAMPAIGN_NUMBER_MUST_BE_INTEGER })
    @IsNotEmpty({ message: ValidationMessagesConstants.CAMPAIGN_NUMBER_IS_REQUIRED })
    number: number;

    /**
     * Campaign year.
     * @type {number}
     */
    @ApiProperty({ required: true, description: 'Campaign year.' })
    @IsPositive({ message: ValidationMessagesConstants.CAMPAIGN_YEAR_MUST_BE_POSITIVE })
    @IsInt({ message: ValidationMessagesConstants.CAMPAIGN_YEAR_MUST_BE_INTEGER })
    @IsNotEmpty({ message: ValidationMessagesConstants.CAMPAIGN_YEAR_IS_REQUIRED })
    year: number;

    /**
     * Total list price of the campaign.
     * @type {number}
     */
    @ApiProperty({ required: true, description: 'Total list price of the campaign.' })
    @IsPositive({ message: ValidationMessagesConstants.TOTAL_LIST_PRICE_MUST_BE_POSITIVE })
    @IsNumber(NumOptionsConst, { message: ValidationMessagesConstants.TOTAL_LIST_PRICE_MUST_BE_NUMBER })
    @IsNotEmpty({ message: ValidationMessagesConstants.TOTAL_LIST_PRICE_IS_REQUIRED })
    totalListPrice: number;

    /**
     * Total catalog price of the campaign.
     * @type {number}
     */
    @ApiProperty({ required: true })
    @IsPositive({ message: ValidationMessagesConstants.TOTAL_CATALOG_PRICE_MUST_BE_POSITIVE })
    @IsNumber(NumOptionsConst, { message: ValidationMessagesConstants.TOTAL_CATALOG_PRICE_MUST_BE_NUMBER })
    @IsNotEmpty({ message: ValidationMessagesConstants.TOTAL_CATALOG_PRICE_IS_REQUIRED })
    totalCatalogPrice: number;

    /**
     * Total products in the campaign.
     * @type {number}
     */
    @ApiProperty({ required: true })
    @IsPositive({ message: ValidationMessagesConstants.TOTAL_PRODUCTS_MUST_BE_POSITIVE })
    @IsInt({ message: ValidationMessagesConstants.TOTAL_PRODUCTS_MUST_BE_INTEGER })
    @IsNotEmpty({ message: ValidationMessagesConstants.TOTAL_PRODUCTS_IS_REQUIRED })
    totalProducts: number;
}
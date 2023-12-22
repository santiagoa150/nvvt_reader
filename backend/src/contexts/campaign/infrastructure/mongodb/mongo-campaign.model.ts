import { HydratedDocument, Schema, SchemaDefinition } from 'mongoose';
import { CampaignDto } from '../campaign-dto';

/**
 * MongoDB document type for the Campaign entity.
 */
export type CampaignDocument = HydratedDocument<CampaignDto>;

/**
 * Schema definition for the Campaign entity.
 * @type {Required<SchemaDefinition<CampaignDto>>}
 */
const definition: Required<SchemaDefinition<CampaignDto>> = {
    campaignId: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    magazineUrl: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    prestigiousUrl: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        index: true,
    },
    totalCatalogPrice: {
        type: Number,
        required: true,
    },
    totalListPrice: {
        type: Number,
        required: true,
    },
    totalProducts: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
};

/**
 * Mongoose Schema for the Campaign entity.
 * @type {Schema<CampaignDto>}
 */
export const CampaignSchema: Schema<CampaignDto> = new Schema<CampaignDto>(definition, { timestamps: true });
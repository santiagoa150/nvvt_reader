import { PaginationPage } from '../../domain/pagination-page';
import { PaginationLimit } from '../../domain/pagination-limit';
import { PipelineStage } from 'mongoose';

/**
 * Type alias for FPipelineStage representing the FacetPipelineStage from PipelineStage module.
 */
type FPipelineStage = PipelineStage.FacetPipelineStage;

/**
 * Utility class for MongoDB operations.
 * @class
 * @abstract
 */
export abstract class MongodbUtils {

    /**
     * Builds a pagination query for MongoDB aggregate operations.
     * @param {PaginationPage} page - The PaginationPage object for pagination.
     * @param {PaginationLimit} limit - The PaginationLimit object for pagination limit.
     * @returns {Array<PipelineStage>} An array of PipelineStage objects representing the aggregation query.
     */
    public static buildPaginationQuery(page: PaginationPage, limit: PaginationLimit): Array<PipelineStage> {
        const aggregate: Array<PipelineStage> = [];
        const metadata: Array<FPipelineStage> = this.resolveMetadata(page, limit);
        const data: Array<FPipelineStage> = this.resolvePagination(page, limit);
        aggregate.push({ $sort: { createdAt: -1 } });
        aggregate.push({ $facet: { data, metadata } });
        aggregate.push({ $unwind: { path: '$metadata' } });
        return aggregate;
    }

    /**
     * Resolves the pagination stage for MongoDB aggregate operations.
     * @param {PaginationPage} page - The PaginationPage object for pagination.
     * @param {PaginationLimit} limit - The PaginationLimit object for pagination limit.
     * @returns {Array<FPipelineStage>} An array of PipelineStage objects representing pagination stages.
     * @private
     * @static
     */
    private static resolvePagination(
        page: PaginationPage,
        limit: PaginationLimit,
    ): Array<FPipelineStage> {
        const pagination: Array<FPipelineStage> = [];
        const skip: number = (page.toNumber() - 1) * limit.toNumber();
        pagination.push({ $skip: skip }, { $limit: limit.toNumber() });
        return pagination;
    }

    /**
     * Resolves the metadata stage for MongoDB aggregate operations.
     * @param {PaginationPage} page - The PaginationPage object for pagination.
     * @param {PaginationLimit} limit - The PaginationLimit object for pagination limit.
     * @returns {Array<FPipelineStage>} An array of PipelineStage objects representing metadata stages.
     * @private
     * @static
     */
    private static resolveMetadata(
        page: PaginationPage,
        limit: PaginationLimit,
    ): Array<FPipelineStage> {
        const metadata: Array<FPipelineStage> = [];
        metadata.push({ $count: 'total' });
        metadata.push({ $addFields: { page: page.toNumber() } });
        metadata.push({ $addFields: { totalPages: { $ceil: { $divide: ['$total', limit.toNumber()] } } } });
        return metadata;
    }
}
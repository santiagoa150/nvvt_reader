import { Provider, Type } from '@nestjs/common';
import { ICommandHandler, IEventHandler, IQueryHandler } from '@nestjs/cqrs';
import { MongoCampaignModelProvider } from './mongo-campaign.model.provider';
import { MongoCampaignRepositoryProvider } from './mongo-campaign.repository.provider';
import { CampaignApplicationsProvider } from './campaign.applications.provider';
import {
    CreateCampaignCommandHandler,
} from '../../../../contexts/campaign/applications/create/create-campaign.command-handler';
import {
    SearchCampaignQueryHandler,
} from '../../../../contexts/campaign/applications/search/by-id/search-campaign.query-handler';
import {
    SearchPaginatedCampaignsQueryHandler,
} from '../../../../contexts/campaign/applications/search/paginated/search-paginated-campaigns.query-handler';

/**
 * Providers related to Campaign handling.
 * @type {Array<Provider>}
 */
export const Providers: Array<Provider> = [
    MongoCampaignModelProvider,
    MongoCampaignRepositoryProvider,
    CampaignApplicationsProvider,
];

/**
 * Query handlers for Campaign related queries.
 * @type {Array<Type<IQueryHandler>>}
 */
export const QueryHandlers: Array<Type<IQueryHandler>> = [
    SearchCampaignQueryHandler,
    SearchPaginatedCampaignsQueryHandler,
];

/**
 * Command handlers for Campaign related commands.
 * @type {Array<Type<ICommandHandler>>}
 */
export const CommandHandlers: Array<Type<ICommandHandler>> = [
    CreateCampaignCommandHandler,
];

/**
 * Event handlers for Campaign related events.
 * @type {Array<Type<IEventHandler>>}
 */
export const EventHandlers: Array<Type<IEventHandler>> = [];
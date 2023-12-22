import { FactoryProvider } from '@nestjs/common';
import { CampaignApplications } from '../../../../contexts/campaign/applications/campaign.applications';
import {
    MongoCampaignRepository,
} from '../../../../contexts/campaign/infrastructure/mongodb/mongo-campaign.repository';
import { CampaignRepository } from '../../../../contexts/campaign/domain/gateways/campaign.repository';

/**
 * Factory provider for the CampaignApplications class.
 * @type {FactoryProvider<CampaignApplications>}
 */
export const CampaignApplicationsProvider: FactoryProvider<CampaignApplications> = {
    inject: [MongoCampaignRepository],
    provide: CampaignApplications,
    useFactory(repository: CampaignRepository): CampaignApplications {
        return new CampaignApplications(repository);
    },
};
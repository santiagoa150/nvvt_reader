import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCampaignCommand } from './create-campaign.command';
import { Campaign } from '../../domain/campaign';
import { CampaignApplications } from '../campaign.applications';

/**
 * Command handler for CreateCampaignCommand.
 * @class
 * @implements {ICommandHandler<CreateCampaignCommand, Campaign>}
 */
@CommandHandler(CreateCampaignCommand)
export class CreateCampaignCommandHandler implements ICommandHandler<CreateCampaignCommand, Campaign> {

    /**
     * @constructor
     * @param {CampaignApplications} apps - An instance of CampaignApplications for handling Campaign creation.
     */
    constructor(private readonly apps: CampaignApplications) {
    }

    /**
     * Executes the CreateCampaignCommand to create a new Campaign.
     * @async
     * @param {CreateCampaignCommand} command - The CreateCampaignCommand instance to execute.
     * @returns {Promise<Campaign>} A Promise that resolves to the created Campaign.
     * @public
     */
    execute(command: CreateCampaignCommand): Promise<Campaign> {
        return this.apps.create(command.magazineUrl, command.prestigiousUrl, command.number, command.year);
    }
}
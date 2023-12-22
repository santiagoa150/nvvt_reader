import { StatusValueObject } from '../../shared/domain/value-object/status.value-object';
import { CampaignStatusConstants } from './campaign-status.constants';
import { CampaignStatusNotValidException } from './exceptions/campaign-status-not-valid.exception';

export class CampaignStatus extends StatusValueObject {

    constructor(value: string) {
        super(value, CampaignStatusConstants, new CampaignStatusNotValidException());
    }
}
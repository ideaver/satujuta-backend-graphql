import { WithdrawalRequestService } from './withdrawal-request.service';
import { WithdrawalRequest } from 'src/@generated';
import { WithdrawalRequestCreateArgs } from './dto/withdrawal-request-create-one.args';
import { WithdrawalRequestFindManyArgs } from './dto/withdrawal-request-find-many.args';
import { WithdrawalRequestFindUniqueArgs } from './dto/withdrawal-request-find-one.args';
import { WithdrawalRequestUpdateOneArgs } from './dto/withdrawal-request-update-one.args';

import { Injectable } from '@nestjs/common';

@Injectable()
export class WithdrawalRequestController {
  constructor(
    private readonly withdrawalRequestService: WithdrawalRequestService,
  ) {}

  async createOne(
    withdrawalRequestCreateArgs: WithdrawalRequestCreateArgs,
  ): Promise<WithdrawalRequest | void> {
    return await this.withdrawalRequestService.createOne(
      withdrawalRequestCreateArgs,
    );
  }

  findMany(withdrawalRequestFindManyArgs: WithdrawalRequestFindManyArgs) {
    return this.withdrawalRequestService.findMany(
      withdrawalRequestFindManyArgs,
    );
  }

  findOne(
    withdrawalRequestFindUniqueArgs: WithdrawalRequestFindUniqueArgs,
  ): Promise<WithdrawalRequest | void> {
    return this.withdrawalRequestService.findOne(
      withdrawalRequestFindUniqueArgs,
    );
  }

  async updateOne(
    withdrawalRequestUpdateOneArgs: WithdrawalRequestUpdateOneArgs,
  ) {
    return this.withdrawalRequestService.update(withdrawalRequestUpdateOneArgs);
  }

  remove(withdrawalRequestId: number) {
    return this.withdrawalRequestService.remove(withdrawalRequestId);
  }
}

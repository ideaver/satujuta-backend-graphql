import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import {
  CreateOneWithdrawalRequestArgs,
  WithdrawalRequest,
} from 'src/@generated';
import { WithdrawalRequestFindManyArgs } from './dto/withdrawal-request-find-many.args';
import { WithdrawalRequestFindUniqueArgs } from './dto/withdrawal-request-find-one.args';
import { WithdrawalRequestUpdateOneArgs } from './dto/withdrawal-request-update-one.args';
import { WithdrawalRequestFindFirstArgs } from './dto/withdrawal-request-find-first.args';

@Injectable()
export class WithdrawalRequestService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    withdrawalRequestCreateArgs: CreateOneWithdrawalRequestArgs,
  ): Promise<WithdrawalRequest | void> {
    return await this.prisma.withdrawalRequest
      .create(withdrawalRequestCreateArgs)
      .then((withdrawalRequest) => {
        return withdrawalRequest;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(withdrawalRequestFindManyArgs: WithdrawalRequestFindManyArgs) {
    return this.prisma.withdrawalRequest
      .findMany(withdrawalRequestFindManyArgs)
      .then((withdrawalRequests) => {
        return withdrawalRequests;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    withdrawalRequestFindUniqueArgs: WithdrawalRequestFindUniqueArgs,
  ): Promise<WithdrawalRequest | void> {
    return await this.prisma.withdrawalRequest
      .findUnique(withdrawalRequestFindUniqueArgs)
      .then((withdrawalRequest) => {
        return withdrawalRequest;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findFirst(
    withdrawalRequestFindFirstArgs: WithdrawalRequestFindFirstArgs,
  ): Promise<WithdrawalRequest | void> {
    return await this.prisma.withdrawalRequest
      .findFirst(withdrawalRequestFindFirstArgs)
      .then((withdrawalRequest) => {
        return withdrawalRequest;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    withdrawalRequestUpdateOneArgs: WithdrawalRequestUpdateOneArgs,
  ): Promise<WithdrawalRequest | void> {
    return this.prisma.withdrawalRequest
      .update(withdrawalRequestUpdateOneArgs)
      .then((withdrawalRequest) => {
        return withdrawalRequest;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(withdrawalRequestId: number): Promise<boolean | void> {
    return await this.prisma.withdrawalRequest
      .delete({
        where: { id: withdrawalRequestId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}

import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { WithdrawalRequest } from 'src/@generated';
import { WithdrawalRequestCreateArgs } from './dto/withdrawal-request-create-one.args';
import { WithdrawalRequestFindManyArgs } from './dto/withdrawal-request-find-many.args';
import { WithdrawalRequestFindUniqueArgs } from './dto/withdrawal-request-find-one.args';
import { WithdrawalRequestUpdateOneArgs } from './dto/withdrawal-request-update-one.args';
import { WithdrawalRequestController } from './withdrawal-request.controller';
import { Logger } from '@nestjs/common';

interface WithdrawalRequestSelect {
  select: Prisma.WithdrawalRequestSelect;
}

@Resolver(() => WithdrawalRequest)
export class WithdrawalRequestResolver {
  constructor(
    private readonly withdrawalRequestController: WithdrawalRequestController,
  ) {}
  private readonly logger = new Logger(WithdrawalRequestResolver.name);
  @Mutation(() => WithdrawalRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async withdrawalRequestCreateOne(
    @Args('withdrawalRequestCreateArgs')
    withdrawalRequestCreateArgs: WithdrawalRequestCreateArgs,
    @Relations() relations: WithdrawalRequestSelect,
  ): Promise<WithdrawalRequest | void> {
    withdrawalRequestCreateArgs.select = relations.select;
    return await this.withdrawalRequestController.createOne(
      withdrawalRequestCreateArgs,
    );
  }

  @Query(() => [WithdrawalRequest], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  withdrawalRequestFindMany(
    @Args('withdrawalRequestFindManyArgs', { nullable: true })
    withdrawalRequestFindManyArgs: WithdrawalRequestFindManyArgs,
    @Relations() relations: WithdrawalRequestSelect,
  ) {
    //Auto implement prisma select from graphql query info
    if (withdrawalRequestFindManyArgs) {
      withdrawalRequestFindManyArgs.select = relations.select;
    }

    return this.withdrawalRequestController.findMany(
      withdrawalRequestFindManyArgs,
    );
  }

  @Query(() => WithdrawalRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  withdrawalRequestFindOne(
    @Args('withdrawalRequestFindUniqueArgs')
    withdrawalRequestFindUniqueArgs: WithdrawalRequestFindUniqueArgs,
    @Relations() relations: WithdrawalRequestSelect,
  ): Promise<WithdrawalRequest | void> {
    //Auto implement prisma select from graphql query info
    withdrawalRequestFindUniqueArgs.select = relations.select;
    return this.withdrawalRequestController.findOne(
      withdrawalRequestFindUniqueArgs,
    );
  }

  @Mutation(() => WithdrawalRequest, {
    description:
      'Deskripsinya ada disini loh, Jika tentang mutasi klaim withdrawalRequest, backend akan cek apakah saldo point user cukup untuk claim',
  })
  async withdrawalRequestUpdateOne(
    @Args('withdrawalRequestUpdateOneArgs')
    withdrawalRequestUpdateOneArgs: WithdrawalRequestUpdateOneArgs,
    @Relations() relations: WithdrawalRequestSelect,
  ) {
    //Auto implement prisma select from graphql query info
    withdrawalRequestUpdateOneArgs.select = relations.select;

    return this.withdrawalRequestController.updateOne(
      withdrawalRequestUpdateOneArgs,
    );
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description: 'Datanya benar2 terhapus dari db',
  })
  withdrawalRequestRemove(
    @Args('withdrawalRequestId') withdrawalRequestId: number,
  ) {
    return this.withdrawalRequestController.remove(withdrawalRequestId);
  }
}

// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateWithdrawalRequest,
  CreateManyWithdrawalRequestArgs,
  CreateOneWithdrawalRequestArgs,
  DeleteManyWithdrawalRequestArgs,
  DeleteOneWithdrawalRequestArgs,
  FindFirstWithdrawalRequestArgs,
  FindManyWithdrawalRequestArgs,
  FindUniqueWithdrawalRequestArgs,
  WithdrawalRequest,
  WithdrawalRequestAggregateArgs,
  UpdateManyWithdrawalRequestArgs,
  UpdateOneWithdrawalRequestArgs,
} from 'src/@generated';
import { WithdrawalRequestController } from './withdrawal-request.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface WithdrawalRequestSelect {
  select: Prisma.WithdrawalRequestSelect;
}

@Resolver(() => WithdrawalRequest)
export class WithdrawalRequestResolver {
  constructor(
    private readonly withdrawalRequestController: WithdrawalRequestController,
  ) {}

  @Mutation(() => WithdrawalRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async withdrawalRequestCreateOne(
    @Args()
    withdrawalRequestCreateArgs: CreateOneWithdrawalRequestArgs,
    @Relations() relations: WithdrawalRequestSelect,
  ): Promise<WithdrawalRequest | void> {
    return await this.withdrawalRequestController.createOne({
      ...withdrawalRequestCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async withdrawalRequestCreateMany(
    @Args()
    createManyWithdrawalRequestArgs: CreateManyWithdrawalRequestArgs,
  ) {
    return await this.withdrawalRequestController.createMany(
      createManyWithdrawalRequestArgs,
    );
  }

  @Query(() => WithdrawalRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  withdrawalRequestFindOne(
    @Args()
    withdrawalRequestFindUniqueArgs: FindUniqueWithdrawalRequestArgs,
    @Relations() relations: WithdrawalRequestSelect,
  ): Promise<WithdrawalRequest | void> {
    return this.withdrawalRequestController.findOne({
      ...withdrawalRequestFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [WithdrawalRequest], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  withdrawalRequestFindMany(
    @Args() withdrawalRequestFindManyArgs: FindManyWithdrawalRequestArgs,
    @Relations() relations: WithdrawalRequestSelect,
  ) {
    return this.withdrawalRequestController.findMany({
      ...withdrawalRequestFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => WithdrawalRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  withdrawalRequestFindFirst(
    @Args()
    findFirstWithdrawalRequestArgs: FindFirstWithdrawalRequestArgs,
    @Relations() relations: WithdrawalRequestSelect,
  ): Promise<WithdrawalRequest | void> {
    return this.withdrawalRequestController.findFirst({
      ...findFirstWithdrawalRequestArgs,
      select: relations.select,
    });
  }

  @Mutation(() => WithdrawalRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async withdrawalRequestUpdateOne(
    @Args() withdrawalRequestUpdateOneArgs: UpdateOneWithdrawalRequestArgs,
    @Relations() relations: WithdrawalRequestSelect,
  ) {
    return this.withdrawalRequestController.updateOne({
      ...replaceNullWithUndefined(withdrawalRequestUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => WithdrawalRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async withdrawalRequestUpdateMany(
    @Args() updateManyWithdrawalRequestArgs: UpdateManyWithdrawalRequestArgs,
  ) {
    return this.withdrawalRequestController.updateMany(
      updateManyWithdrawalRequestArgs,
    );
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async withdrawalRequestDelete(
    @Args() deleteOneWithdrawalRequestArgs: DeleteOneWithdrawalRequestArgs,
    @Relations() relations: WithdrawalRequestSelect,
  ) {
    return this.withdrawalRequestController.delete({
      ...deleteOneWithdrawalRequestArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async withdrawalRequestDeleteMany(
    @Args() deleteManyWithdrawalRequestArgs: DeleteManyWithdrawalRequestArgs,
  ) {
    return this.withdrawalRequestController.deleteMany(
      deleteManyWithdrawalRequestArgs,
    );
  }

  @Query(() => AggregateWithdrawalRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  withdrawalRequestAggregate(
    @Args() withdrawalRequestAggregateArgs: WithdrawalRequestAggregateArgs,
  ) {
    return this.withdrawalRequestController.aggregate(
      withdrawalRequestAggregateArgs,
    );
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  withdrawalRequestCount(
    @Args() withdrawalRequestCountAggregateInput: FindManyWithdrawalRequestArgs,
  ) {
    return this.withdrawalRequestController.count(
      withdrawalRequestCountAggregateInput,
    );
  }
}

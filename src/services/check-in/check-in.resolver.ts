// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateCheckIn,
  CreateManyCheckInArgs,
  CreateOneCheckInArgs,
  DeleteManyCheckInArgs,
  DeleteOneCheckInArgs,
  FindFirstCheckInArgs,
  FindManyCheckInArgs,
  FindUniqueCheckInArgs,
  CheckIn,
  CheckInAggregateArgs,
  UpdateManyCheckInArgs,
  UpdateOneCheckInArgs,
} from 'src/@generated';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import { CheckInController } from './check-in.controller';

interface CheckInSelect {
  select: Prisma.CheckInSelect;
}

@Resolver(() => CheckIn)
export class CheckInResolver {
  constructor(private readonly checkInController: CheckInController) {}

  @Mutation(() => CheckIn, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async checkInCreateOne(
    @Args()
    checkInCreateArgs: CreateOneCheckInArgs,
    @Relations() relations: CheckInSelect,
  ): Promise<CheckIn | void> {
    return await this.checkInController.createOne({
      ...checkInCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async checkInCreateMany(
    @Args()
    createManyCheckInArgs: CreateManyCheckInArgs,
  ) {
    return await this.checkInController.createMany(createManyCheckInArgs);
  }

  @Query(() => CheckIn, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  checkInFindOne(
    @Args()
    checkInFindUniqueArgs: FindUniqueCheckInArgs,
    @Relations() relations: CheckInSelect,
  ): Promise<CheckIn | void> {
    return this.checkInController.findOne({
      ...checkInFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [CheckIn], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  checkInFindMany(
    @Args() checkInFindManyArgs: FindManyCheckInArgs,
    @Relations() relations: CheckInSelect,
  ) {
    return this.checkInController.findMany({
      ...checkInFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => CheckIn, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  checkInFindFirst(
    @Args()
    findFirstCheckInArgs: FindFirstCheckInArgs,
    @Relations() relations: CheckInSelect,
  ): Promise<CheckIn | void> {
    return this.checkInController.findFirst({
      ...findFirstCheckInArgs,
      select: relations.select,
    });
  }

  @Mutation(() => CheckIn, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async checkInUpdateOne(
    @Args() checkInUpdateOneArgs: UpdateOneCheckInArgs,
    @Relations() relations: CheckInSelect,
  ) {
    return this.checkInController.updateOne({
      ...replaceNullWithUndefined(checkInUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => CheckIn, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async checkInUpdateMany(
    @Args() updateManyCheckInArgs: UpdateManyCheckInArgs,
  ) {
    return this.checkInController.updateMany(updateManyCheckInArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async checkInDelete(
    @Args() deleteOneCheckInArgs: DeleteOneCheckInArgs,
    @Relations() relations: CheckInSelect,
  ) {
    return this.checkInController.delete({
      ...deleteOneCheckInArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async checkInDeleteMany(
    @Args() deleteManyCheckInArgs: DeleteManyCheckInArgs,
  ) {
    return this.checkInController.deleteMany(deleteManyCheckInArgs);
  }

  @Query(() => AggregateCheckIn, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  checkInAggregate(@Args() checkInAggregateArgs: CheckInAggregateArgs) {
    return this.checkInController.aggregate(checkInAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  checkInCount(@Args() checkInCountAggregateInput: FindManyCheckInArgs) {
    return this.checkInController.count(checkInCountAggregateInput);
  }
}

import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Reward } from 'src/@generated';
import { RewardCreateArgs } from './dto/reward-create-one.args';
import { RewardFindManyArgs } from './dto/reward-find-many.args';
import { RewardFindUniqueArgs } from './dto/reward-find-one.args';
import { RewardUpdateOneArgs } from './dto/reward-update-one.args';
import { RewardController } from './reward.controller';

interface RewardSelect {
  select: Prisma.RewardSelect;
}

@Resolver(() => Reward)
export class RewardResolver {
  constructor(private readonly rewardController: RewardController) {}

  @Mutation(() => Reward, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardCreateOne(
    @Args('rewardCreateArgs') rewardCreateArgs: RewardCreateArgs,
    @Relations() relations: RewardSelect,
  ): Promise<Reward | void> {
    rewardCreateArgs.select = relations.select;
    return await this.rewardController.createOne(rewardCreateArgs);
  }

  @Query(() => [Reward], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardFindMany(
    @Args('rewardFindManyArgs') rewardFindManyArgs: RewardFindManyArgs,
    @Relations() relations: RewardSelect,
  ) {
    //Auto implement prisma select from graphql query info
    rewardFindManyArgs.select = relations.select;
    return this.rewardController.findMany(rewardFindManyArgs);
  }

  @Query(() => Reward, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardFindOne(
    @Args('rewardFindUniqueArgs')
    rewardFindUniqueArgs: RewardFindUniqueArgs,
    @Relations() relations: RewardSelect,
  ): Promise<Reward | void> {
    //Auto implement prisma select from graphql query info
    rewardFindUniqueArgs.select = relations.select;
    return this.rewardController.findOne(rewardFindUniqueArgs);
  }

  @Mutation(() => Reward, {
    description:
      'Deskripsinya ada disini loh, Jika tentang mutasi klaim reward, backend akan cek apakah saldo point user cukup untuk claim',
  })
  async rewardUpdateOne(
    @Args('rewardUpdateOneArgs') rewardUpdateOneArgs: RewardUpdateOneArgs,
    @Relations() relations: RewardSelect,
  ) {
    rewardUpdateOneArgs.select = relations.select;

    return this.rewardController.updateOne(rewardUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description: 'Datanya benar2 terhapus dari db',
  })
  rewardRemove(@Args('rewardId') rewardId: number) {
    return this.rewardController.remove(rewardId);
  }
}

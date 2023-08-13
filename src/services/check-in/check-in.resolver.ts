import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { CheckInService } from './check-in.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { CheckIn } from 'src/@generated';
import { CheckInCreateArgs } from './dto/check-in-create-one.args';
import { CheckInFindManyArgs } from './dto/check-in-find-many.args';
import { CheckInFindUniqueArgs } from './dto/check-in-find-one.args';
import { CheckInUpdateOneArgs } from './dto/check-in-update-one.args';

interface CheckInSelect {
  select: Prisma.CheckInSelect;
}

@Resolver(() => CheckIn)
export class CheckInResolver {
  constructor(private readonly checkInService: CheckInService) {}

  @Mutation(() => CheckIn, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async checkInCreateOne(
    @Args('checkInCreateArgs') checkInCreateArgs: CheckInCreateArgs,
    @Relations() relations: CheckInSelect
  ): Promise<CheckIn | void> {
    checkInCreateArgs.select = relations.select;
    return await this.checkInService.createOne(checkInCreateArgs);
  }

  @Query(() => [CheckIn], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  checkInFindMany(
    @Args('checkInFindManyArgs') checkInFindManyArgs: CheckInFindManyArgs,
    @Relations() relations: CheckInSelect,
  ) {
    //Auto implement prisma select from graphql query info
    checkInFindManyArgs.select = relations.select;
    return this.checkInService.findMany(checkInFindManyArgs);
  }

  @Query(() => CheckIn, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  checkInFindOne(
    @Args('checkInFindUniqueArgs')
    checkInFindUniqueArgs: CheckInFindUniqueArgs,
    @Relations() relations: CheckInSelect,
  ) {
    //Auto implement prisma select from graphql query info
    checkInFindUniqueArgs.select = relations.select;
    return this.checkInService.findOne(checkInFindUniqueArgs);
  }

  @Mutation(() => CheckIn, { description: 'Deskripsinya ada disini loh' })
  checkInUpdateOne(
    @Args('checkInUpdateOneArgs') checkInUpdateOneArgs: CheckInUpdateOneArgs,
    @Relations() relations: CheckInSelect,
  ) {
    checkInUpdateOneArgs.select = relations.select;
    return this.checkInService.update(checkInUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  checkInRemove(@Args('checkInId') checkInId: number) {
    return this.checkInService.remove(checkInId);
  }
}

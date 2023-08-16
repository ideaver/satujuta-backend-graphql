import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserCreateArgs } from './dto/user-create-one.args';
import { UserFindManyArgs } from './dto/user-find-many.args';
import { UserFindUniqueArgs } from './dto/user-find-one.args';
import { UserUpdateOneArgs } from './dto/user-update-one.args';
import { User } from 'src/model/user.model';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { generateRandomReferralCode } from 'src/utils/generate-random-referral-code.function';

interface UserSelect {
  select: Prisma.UserSelect;
}

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userCreateOne(
    @Args('userCreateArgs') userCreateArgs: UserCreateArgs,
    @Relations() relations: UserSelect,
  ): Promise<User | void> {
    //Generate Random Referral Code
    userCreateArgs.data.referralCode = generateRandomReferralCode();

    //Auto implement prisma select from graphql query info
    userCreateArgs.select = relations.select;

    //Handle null value GraphQL Capabitlity
    if (userCreateArgs.data.referredBy.connect.referralCode === null) {
      userCreateArgs.data.referredBy = undefined;
    }

    //Auto Create User Accounts
    userCreateArgs.data.accounts.createMany = {
      data: [
        { name: 'CASH Account', accountCategory: 'CASH' },
        {
          name: 'COMISSION Account',
          accountCategory: 'COMISSION',
        },
        { name: 'EQUITY Account', accountCategory: 'EQUITY' },
        { name: 'DEBT Account', accountCategory: 'DEBT' },
      ],
    };

    return await this.userService.createOne(userCreateArgs);
  }

  @Query(() => [User], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindMany(
    @Args('userFindManyArgs') userFindManyArgs: UserFindManyArgs,
    @Relations() relations: UserSelect,
  ) {
    //Auto implement prisma select from graphql query info
    userFindManyArgs.select = relations.select;
    return this.userService.findMany(userFindManyArgs);
  }

  @Query(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindOne(
    @Args('userFindUniqueArgs')
    userFindUniqueArgs: UserFindUniqueArgs,
    @Relations() relations: UserSelect,
  ) {
    //Auto implement prisma select from graphql query info
    userFindUniqueArgs.select = relations.select;
    return this.userService.findOne(userFindUniqueArgs);
  }

  @Mutation(() => User, { description: 'Deskripsinya ada disini loh' })
  userUpdateOne(
    @Args('userUpdateOneArgs') userUpdateOneArgs: UserUpdateOneArgs,
    @Relations() relations: UserSelect,
  ) {
    userUpdateOneArgs.select = relations.select;
    //TODO: Implement whatsapp verification
    return this.userService.update(userUpdateOneArgs);
  }

  @Mutation(() => User, {
    nullable: true,
    description:
      'Hanya berupa softdelete, artinya semua data tetap ada di database. field deleteAt pada entitas user akan terisi. select: { id: true, firstName: true, deletedAt: true }',
  })
  userRemove(@Args('userId') userId: string) {
    return this.userService.remove(userId);
  }
}

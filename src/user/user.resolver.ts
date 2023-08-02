import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserCreateArgs } from './dto/user-create-one.args';
import { FindManyUserArgs } from './dto/user-find-many.args';
import { UserFindUniqueArgs } from './dto/user-find-one.args';
import { UserUpdateOneArgs } from './dto/user-update-one.args';
import { User } from 'src/@generated';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userCreate(
    @Args('userCreateArgs') userCreateArgs: UserCreateArgs,
  ): Promise<User | void> {
    return await this.userService.create(userCreateArgs);
  }

  @Query(() => [User], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindMany(@Args('userFindManyArgs') userFindManyArgs: FindManyUserArgs) {
    return this.userService.findMany(userFindManyArgs);
  }

  @Query(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindOne(
    @Args('userFindUniqueArgs')
    userFindUniqueArgs: UserFindUniqueArgs,
  ) {
    return this.userService.findOne(userFindUniqueArgs);
  }

  @Mutation(() => User, { description: 'Deskripsinya ada disini loh' })
  updateUser(@Args('userUpdateOneArgs') userUpdateOneArgs: UserUpdateOneArgs) {
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

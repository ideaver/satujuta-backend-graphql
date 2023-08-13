import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { UserNotificationService } from './user-notification.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { UserNotification } from 'src/@generated';
import { UserNotificationCreateArgs } from './dto/user-notification';
import { UserNotificationFindManyArgs } from './dto/user-notification-find-many.args';
import { UserNotificationFindUniqueArgs } from './dto/user-notification-find-one.args';
import { UserNotificationUpdateOneArgs } from './dto/user-notification-update-one.args';

interface UserNotificationSelect {
  select: Prisma.UserNotificationSelect;
}

@Resolver(() => UserNotification)
export class UserNotificationResolver {
  constructor(private readonly userNotificationService: UserNotificationService) {}

  @Mutation(() => UserNotification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userNotificationCreateOne(
    @Args('userNotificationCreateArgs') userNotificationCreateArgs: UserNotificationCreateArgs,
    @Relations() relations: UserNotificationSelect
  ): Promise<UserNotification | void> {
    userNotificationCreateArgs.select = relations.select;
    return await this.userNotificationService.createOne(userNotificationCreateArgs);
  }

  @Query(() => [UserNotification], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userNotificationFindMany(
    @Args('userNotificationFindManyArgs') userNotificationFindManyArgs: UserNotificationFindManyArgs,
    @Relations() relations: UserNotificationSelect,
  ) {
    //Auto implement prisma select from graphql query info
    userNotificationFindManyArgs.select = relations.select;
    return this.userNotificationService.findMany(userNotificationFindManyArgs);
  }

  @Query(() => UserNotification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userNotificationFindOne(
    @Args('userNotificationFindUniqueArgs')
    userNotificationFindUniqueArgs: UserNotificationFindUniqueArgs,
    @Relations() relations: UserNotificationSelect,
  ) {
    //Auto implement prisma select from graphql query info
    userNotificationFindUniqueArgs.select = relations.select;
    return this.userNotificationService.findOne(userNotificationFindUniqueArgs);
  }

  @Mutation(() => UserNotification, { description: 'Deskripsinya ada disini loh' })
  userNotificationUpdateOne(
    @Args('userNotificationUpdateOneArgs') userNotificationUpdateOneArgs: UserNotificationUpdateOneArgs,
    @Relations() relations: UserNotificationSelect,
  ) {
    userNotificationUpdateOneArgs.select = relations.select;
    return this.userNotificationService.update(userNotificationUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  userNotificationRemove(@Args('userNotificationId') userNotificationId: number) {
    return this.userNotificationService.remove(userNotificationId);
  }
}

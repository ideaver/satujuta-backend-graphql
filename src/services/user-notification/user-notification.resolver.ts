// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateUserNotification,
  CreateManyUserNotificationArgs,
  CreateOneUserNotificationArgs,
  DeleteManyUserNotificationArgs,
  DeleteOneUserNotificationArgs,
  FindFirstUserNotificationArgs,
  FindManyUserNotificationArgs,
  FindUniqueUserNotificationArgs,
  UserNotification,
  UserNotificationAggregateArgs,
  UpdateManyUserNotificationArgs,
  UpdateOneUserNotificationArgs,
} from 'src/@generated';
import { UserNotificationController } from './user-notification.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface UserNotificationSelect {
  select: Prisma.UserNotificationSelect;
}

@Resolver(() => UserNotification)
export class UserNotificationResolver {
  constructor(
    private readonly userNotificationController: UserNotificationController,
  ) {}

  // @Mutation(() => UserNotification, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userNotificationCreateOne(
  //   @Args()
  //   userNotificationCreateArgs: CreateOneUserNotificationArgs,
  //   @Relations() relations: UserNotificationSelect,
  // ): Promise<UserNotification | void> {
  //   return await this.userNotificationController.createOne({
  //     ...userNotificationCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userNotificationCreateMany(
  //   @Args()
  //   createManyUserNotificationArgs: CreateManyUserNotificationArgs,
  // ) {
  //   return await this.userNotificationController.createMany(
  //     createManyUserNotificationArgs,
  //   );
  // }

  @Query(() => UserNotification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userNotificationFindOne(
    @Args()
    userNotificationFindUniqueArgs: FindUniqueUserNotificationArgs,
    @Relations() relations: UserNotificationSelect,
  ): Promise<UserNotification | void> {
    return this.userNotificationController.findOne({
      ...userNotificationFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [UserNotification], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userNotificationFindMany(
    @Args() userNotificationFindManyArgs: FindManyUserNotificationArgs,
    @Relations() relations: UserNotificationSelect,
  ) {
    return this.userNotificationController.findMany({
      ...userNotificationFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => UserNotification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userNotificationFindFirst(
    @Args()
    findFirstUserNotificationArgs: FindFirstUserNotificationArgs,
    @Relations() relations: UserNotificationSelect,
  ): Promise<UserNotification | void> {
    return this.userNotificationController.findFirst({
      ...findFirstUserNotificationArgs,
      select: relations.select,
    });
  }

  @Mutation(() => UserNotification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userNotificationUpdateOne(
    @Args() userNotificationUpdateOneArgs: UpdateOneUserNotificationArgs,
    @Relations() relations: UserNotificationSelect,
  ) {
    return this.userNotificationController.updateOne({
      ...replaceNullWithUndefined(userNotificationUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => UserNotification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userNotificationUpdateMany(
    @Args() updateManyUserNotificationArgs: UpdateManyUserNotificationArgs,
  ) {
    return this.userNotificationController.updateMany(
      updateManyUserNotificationArgs,
    );
  }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userNotificationDelete(
  //   @Args() deleteOneUserNotificationArgs: DeleteOneUserNotificationArgs,
  //   @Relations() relations: UserNotificationSelect,
  // ) {
  //   return this.userNotificationController.delete({
  //     ...deleteOneUserNotificationArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userNotificationDeleteMany(
  //   @Args() deleteManyUserNotificationArgs: DeleteManyUserNotificationArgs,
  // ) {
  //   return this.userNotificationController.deleteMany(
  //     deleteManyUserNotificationArgs,
  //   );
  // }

  @Query(() => AggregateUserNotification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userNotificationAggregate(
    @Args() userNotificationAggregateArgs: UserNotificationAggregateArgs,
  ) {
    return this.userNotificationController.aggregate(
      userNotificationAggregateArgs,
    );
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userNotificationCount(
    @Args() userNotificationCountAggregateInput: FindManyUserNotificationArgs,
  ) {
    return this.userNotificationController.count(
      userNotificationCountAggregateInput,
    );
  }
}

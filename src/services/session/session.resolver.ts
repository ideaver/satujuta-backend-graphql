// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateSession,
  CreateManySessionArgs,
  CreateOneSessionArgs,
  DeleteManySessionArgs,
  DeleteOneSessionArgs,
  FindFirstSessionArgs,
  FindManySessionArgs,
  FindUniqueSessionArgs,
  Session,
  SessionAggregateArgs,
  UpdateManySessionArgs,
  UpdateOneSessionArgs,
} from 'src/@generated';
import { SessionController } from './session.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface SessionSelect {
  select: Prisma.SessionSelect;
}

@Resolver(() => Session)
export class SessionResolver {
  constructor(private readonly sessionController: SessionController) {}

  @Query(() => Session, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  sessionFindOne(
    @Args()
    sessionFindUniqueArgs: FindUniqueSessionArgs,
    @Relations() relations: SessionSelect,
  ): Promise<Session | void> {
    return this.sessionController.findOne({
      ...sessionFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Session], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  sessionFindMany(
    @Args() sessionFindManyArgs: FindManySessionArgs,
    @Relations() relations: SessionSelect,
  ) {
    return this.sessionController.findMany({
      ...sessionFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Session, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  sessionFindFirst(
    @Args()
    findFirstSessionArgs: FindFirstSessionArgs,
    @Relations() relations: SessionSelect,
  ): Promise<Session | void> {
    return this.sessionController.findFirst({
      ...findFirstSessionArgs,
      select: relations.select,
    });
  }

  // @Mutation(() => Session, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async sessionUpdateOne(
  //   @Args() sessionUpdateOneArgs: UpdateOneSessionArgs,
  //   @Relations() relations: SessionSelect,
  // ) {
  //   return this.sessionController.updateOne({
  //     ...replaceNullWithUndefined(sessionUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Session, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async sessionUpdateMany(
  //   @Args() updateManySessionArgs: UpdateManySessionArgs,
  // ) {
  //   return this.sessionController.updateMany(updateManySessionArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async sessionDelete(
  //   @Args() deleteOneSessionArgs: DeleteOneSessionArgs,
  //   @Relations() relations: SessionSelect,
  // ) {
  //   return this.sessionController.delete({
  //     ...deleteOneSessionArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async sessionDeleteMany(
  //   @Args() deleteManySessionArgs: DeleteManySessionArgs,
  // ) {
  //   return this.sessionController.deleteMany(deleteManySessionArgs);
  // }

  @Query(() => AggregateSession, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  sessionAggregate(@Args() sessionAggregateArgs: SessionAggregateArgs) {
    return this.sessionController.aggregate(sessionAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  sessionCount(@Args() sessionCountAggregateInput: FindManySessionArgs) {
    return this.sessionController.count(sessionCountAggregateInput);
  }
}

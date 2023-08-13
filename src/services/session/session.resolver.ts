import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { SessionService } from './session.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Session } from 'src/@generated';
import { SessionCreateArgs } from './dto/session-create-one.args';
import { SessionFindManyArgs } from './dto/session-find-many.args';
import { SessionFindUniqueArgs } from './dto/session-find-one.args';
import { SessionUpdateOneArgs } from './dto/session-update-one.args';

interface SessionSelect {
  select: Prisma.SessionSelect;
}

@Resolver(() => Session)
export class SessionResolver {
  constructor(private readonly sessionService: SessionService) {}

  @Mutation(() => Session, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async sessionCreateOne(
    @Args('sessionCreateArgs') sessionCreateArgs: SessionCreateArgs,
    @Relations() relations: SessionSelect
  ): Promise<Session | void> {
    sessionCreateArgs.select = relations.select;
    return await this.sessionService.createOne(sessionCreateArgs);
  }

  @Query(() => [Session], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  sessionFindMany(
    @Args('sessionFindManyArgs') sessionFindManyArgs: SessionFindManyArgs,
    @Relations() relations: SessionSelect,
  ) {
    //Auto implement prisma select from graphql query info
    sessionFindManyArgs.select = relations.select;
    return this.sessionService.findMany(sessionFindManyArgs);
  }

  @Query(() => Session, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  sessionFindOne(
    @Args('sessionFindUniqueArgs')
    sessionFindUniqueArgs: SessionFindUniqueArgs,
    @Relations() relations: SessionSelect,
  ) {
    //Auto implement prisma select from graphql query info
    sessionFindUniqueArgs.select = relations.select;
    return this.sessionService.findOne(sessionFindUniqueArgs);
  }

  // @Mutation(() => Session, { description: 'Deskripsinya ada disini loh' })
  // sessionUpdateOne(
  //   @Args('sessionUpdateOneArgs') sessionUpdateOneArgs: SessionUpdateOneArgs,
  //   @Relations() relations: SessionSelect,
  // ) {
  //   sessionUpdateOneArgs.select = relations.select;
  //   return this.sessionService.update(sessionUpdateOneArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: true,
  //   description:
  //     'Datanya benar2 terhapus dari db',
  // })
  // sessionRemove(@Args('sessionId') sessionId: number) {
  //   return this.sessionService.remove(sessionId);
  // }
}

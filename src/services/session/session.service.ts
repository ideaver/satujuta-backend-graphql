import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneSessionArgs, Session } from 'src/@generated';
import { SessionFindManyArgs } from './dto/session-find-many.args';
import { SessionFindUniqueArgs } from './dto/session-find-one.args';
import { SessionUpdateOneArgs } from './dto/session-update-one.args';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    sessionCreateArgs: CreateOneSessionArgs,
  ): Promise<Session | void> {
    return await this.prisma.session
      .create(sessionCreateArgs)
      .then((session) => {
        return session;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(sessionFindManyArgs: SessionFindManyArgs) {
    return this.prisma.session
      .findMany(sessionFindManyArgs)
      .then((sessions) => {
        return sessions;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    sessionFindUniqueArgs: SessionFindUniqueArgs,
  ): Promise<Session | void> {
    return await this.prisma.session
      .findUnique(sessionFindUniqueArgs)
      .then((session) => {
        return session;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    sessionUpdateOneArgs: SessionUpdateOneArgs,
  ): Promise<Session | void> {
    return this.prisma.session
      .update(sessionUpdateOneArgs)
      .then((session) => {
        return session;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(sessionId: number): Promise<boolean | void> {
    return await this.prisma.session
      .delete({
        where: { id: sessionId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}

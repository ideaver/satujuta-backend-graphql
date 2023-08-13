import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneSessionArgs, Session } from 'src/@generated';
import { SessionFindManyArgs } from './dto/session-find-many.args';
import { SessionFindUniqueArgs } from './dto/session-find-one.args';
import { SessionUpdateOneArgs } from './dto/session-update-one.args';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async createOne(sessionCreateArgs: CreateOneSessionArgs): Promise<Session | void> {

    return await this.prisma.session
      .create(sessionCreateArgs)
      .then((session) => {
        return session;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(sessionFindManyArgs: SessionFindManyArgs) {
    return this.prisma.session
      .findMany(sessionFindManyArgs)
      .then((sessions) => {
        return sessions;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(sessionFindUniqueArgs: SessionFindUniqueArgs): Promise<Session | void> {
    return await this.prisma.session
      .findUnique(sessionFindUniqueArgs)
      .then((session) => {
        return session;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(sessionUpdateOneArgs: SessionUpdateOneArgs): Promise<Session | void> {
    return this.prisma.session
      .update(sessionUpdateOneArgs)
      .then((session) => {
        return session;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(sessionId: number): Promise<boolean | void>{
    return await this.prisma.session
      .delete({
        where: { id: sessionId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}

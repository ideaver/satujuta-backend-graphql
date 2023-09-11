import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { SessionService } from './session.service';

@Injectable()
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  async createOne(sessionCreateArgs: Prisma.SessionCreateArgs) {
    return await this.sessionService.createOne(sessionCreateArgs);
  }

  async createMany(sessionCreateManyArgs: Prisma.SessionCreateManyArgs) {
    return await this.sessionService.createMany(sessionCreateManyArgs);
  }

  async findOne(sessionFindUniqueArgs: Prisma.SessionFindUniqueArgs) {
    return await this.sessionService.findOne(sessionFindUniqueArgs);
  }

  async findMany(sessionFindManyArgs: Prisma.SessionFindManyArgs) {
    return await this.sessionService.findMany(sessionFindManyArgs);
  }

  async findFirst(sessionFindFirstArgs: Prisma.SessionFindFirstArgs) {
    return await this.sessionService.findFirst(sessionFindFirstArgs);
  }

  async updateOne(sessionUpdateOneArgs: Prisma.SessionUpdateArgs) {
    return await this.sessionService.updateOne(sessionUpdateOneArgs);
  }

  async updateMany(sessionUpdateManyArgs: Prisma.SessionUpdateManyArgs) {
    return await this.sessionService.updateMany(sessionUpdateManyArgs);
  }

  async delete(sessionDeleteArgs: Prisma.SessionDeleteArgs) {
    return await this.sessionService.delete(sessionDeleteArgs);
  }

  async deleteMany(sessionDeleteManyArgs: Prisma.SessionDeleteManyArgs) {
    return await this.sessionService.deleteMany(sessionDeleteManyArgs);
  }

  async aggregate(sessionAggregateArgs: Prisma.SessionAggregateArgs) {
    return await this.sessionService.aggregate(sessionAggregateArgs);
  }

  async count(sessionCountArgs: Prisma.SessionCountArgs) {
    return await this.sessionService.count(sessionCountArgs);
  }
}

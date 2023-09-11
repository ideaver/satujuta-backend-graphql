import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async createOne(sessionCreateArgs: Prisma.SessionCreateArgs) {
    try {
      return await this.prisma.session.create(sessionCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(sessionCreateManyArgs: Prisma.SessionCreateManyArgs) {
    try {
      return await this.prisma.session.createMany(sessionCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(sessionFindUniqueArgs: Prisma.SessionFindUniqueArgs) {
    try {
      return await this.prisma.session.findUnique(sessionFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(sessionFindManyArgs: Prisma.SessionFindManyArgs) {
    try {
      return await this.prisma.session.findMany(sessionFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(sessionFindFirstArgs: Prisma.SessionFindFirstArgs) {
    try {
      return await this.prisma.session.findFirst(sessionFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(sessionUpdateOneArgs: Prisma.SessionUpdateArgs) {
    try {
      return await this.prisma.session.update(sessionUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(sessionUpdateManyArgs: Prisma.SessionUpdateManyArgs) {
    try {
      return await this.prisma.session.updateMany(sessionUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(sessionDeleteArgs: Prisma.SessionDeleteArgs) {
    try {
      await this.prisma.session.delete(sessionDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(sessionDeleteManyArgs: Prisma.SessionDeleteManyArgs) {
    try {
      await this.prisma.session.deleteMany(sessionDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(sessionAggregateArgs: Prisma.SessionAggregateArgs) {
    try {
      return await this.prisma.session.aggregate(sessionAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(sessionCountArgs: Prisma.SessionCountArgs) {
    try {
      return await this.prisma.session.count(sessionCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

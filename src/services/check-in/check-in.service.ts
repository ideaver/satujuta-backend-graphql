import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class CheckInService {
  constructor(private prisma: PrismaService) {}

  async createOne(checkInCreateArgs: Prisma.CheckInCreateArgs) {
    try {
      return await this.prisma.checkIn.create(checkInCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(checkInCreateManyArgs: Prisma.CheckInCreateManyArgs) {
    try {
      return await this.prisma.checkIn.createMany(checkInCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(checkInFindUniqueArgs: Prisma.CheckInFindUniqueArgs) {
    try {
      return await this.prisma.checkIn.findUnique(checkInFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(checkInFindManyArgs: Prisma.CheckInFindManyArgs) {
    try {
      return await this.prisma.checkIn.findMany(checkInFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(checkInFindFirstArgs: Prisma.CheckInFindFirstArgs) {
    try {
      return await this.prisma.checkIn.findFirst(checkInFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(checkInUpdateOneArgs: Prisma.CheckInUpdateArgs) {
    try {
      return await this.prisma.checkIn.update(checkInUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(checkInUpdateManyArgs: Prisma.CheckInUpdateManyArgs) {
    try {
      return await this.prisma.checkIn.updateMany(checkInUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(checkInDeleteArgs: Prisma.CheckInDeleteArgs) {
    try {
      await this.prisma.checkIn.delete(checkInDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(checkInDeleteManyArgs: Prisma.CheckInDeleteManyArgs) {
    try {
      await this.prisma.checkIn.deleteMany(checkInDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(checkInAggregateArgs: Prisma.CheckInAggregateArgs) {
    try {
      return await this.prisma.checkIn.aggregate(checkInAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(checkInCountArgs: Prisma.CheckInCountArgs) {
    try {
      return await this.prisma.checkIn.count(checkInCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async createOne(schoolCreateArgs: Prisma.SchoolCreateArgs) {
    try {
      return await this.prisma.school.create(schoolCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(schoolCreateManyArgs: Prisma.SchoolCreateManyArgs) {
    try {
      return await this.prisma.school.createMany(schoolCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(schoolFindUniqueArgs: Prisma.SchoolFindUniqueArgs) {
    try {
      return await this.prisma.school.findUnique(schoolFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(schoolFindManyArgs: Prisma.SchoolFindManyArgs) {
    try {
      return await this.prisma.school.findMany(schoolFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(schoolFindFirstArgs: Prisma.SchoolFindFirstArgs) {
    try {
      return await this.prisma.school.findFirst(schoolFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(schoolUpdateOneArgs: Prisma.SchoolUpdateArgs) {
    try {
      return await this.prisma.school.update(schoolUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(schoolUpdateManyArgs: Prisma.SchoolUpdateManyArgs) {
    try {
      return await this.prisma.school.updateMany(schoolUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(schoolDeleteArgs: Prisma.SchoolDeleteArgs) {
    try {
      await this.prisma.school.delete(schoolDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(schoolDeleteManyArgs: Prisma.SchoolDeleteManyArgs) {
    try {
      await this.prisma.school.deleteMany(schoolDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(schoolAggregateArgs: Prisma.SchoolAggregateArgs) {
    try {
      return await this.prisma.school.aggregate(schoolAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(schoolCountArgs: Prisma.SchoolCountArgs) {
    try {
      return await this.prisma.school.count(schoolCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

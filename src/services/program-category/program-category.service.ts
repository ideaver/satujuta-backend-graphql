import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProgramCategoryService {
  constructor(private prisma: PrismaService) {}

  async createOne(programCategoryCreateArgs: Prisma.ProgramCategoryCreateArgs) {
    try {
      return await this.prisma.programCategory.create(
        programCategoryCreateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(
    programCategoryCreateManyArgs: Prisma.ProgramCategoryCreateManyArgs,
  ) {
    try {
      return await this.prisma.programCategory.createMany(
        programCategoryCreateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(
    programCategoryFindUniqueArgs: Prisma.ProgramCategoryFindUniqueArgs,
  ) {
    try {
      return await this.prisma.programCategory.findUnique(
        programCategoryFindUniqueArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(
    programCategoryFindManyArgs: Prisma.ProgramCategoryFindManyArgs,
  ) {
    try {
      return await this.prisma.programCategory.findMany(
        programCategoryFindManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(
    programCategoryFindFirstArgs: Prisma.ProgramCategoryFindFirstArgs,
  ) {
    try {
      return await this.prisma.programCategory.findFirst(
        programCategoryFindFirstArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(
    programCategoryUpdateOneArgs: Prisma.ProgramCategoryUpdateArgs,
  ) {
    try {
      return await this.prisma.programCategory.update(
        programCategoryUpdateOneArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(
    programCategoryUpdateManyArgs: Prisma.ProgramCategoryUpdateManyArgs,
  ) {
    try {
      return await this.prisma.programCategory.updateMany(
        programCategoryUpdateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(programCategoryDeleteArgs: Prisma.ProgramCategoryDeleteArgs) {
    try {
      await this.prisma.programCategory.delete(programCategoryDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(
    programCategoryDeleteManyArgs: Prisma.ProgramCategoryDeleteManyArgs,
  ) {
    try {
      await this.prisma.programCategory.deleteMany(
        programCategoryDeleteManyArgs,
      );
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(
    programCategoryAggregateArgs: Prisma.ProgramCategoryAggregateArgs,
  ) {
    try {
      return await this.prisma.programCategory.aggregate(
        programCategoryAggregateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(programCategoryCountArgs: Prisma.ProgramCategoryCountArgs) {
    try {
      return await this.prisma.programCategory.count(programCategoryCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

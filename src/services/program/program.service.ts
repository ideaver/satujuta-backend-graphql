import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProgramService {
  constructor(private prisma: PrismaService) {}

  async createOne(programCreateArgs: Prisma.ProgramCreateArgs) {
    try {
      return await this.prisma.program.create(programCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(programCreateManyArgs: Prisma.ProgramCreateManyArgs) {
    try {
      return await this.prisma.program.createMany(programCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(programFindUniqueArgs: Prisma.ProgramFindUniqueArgs) {
    try {
      return await this.prisma.program.findUnique(programFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(programFindManyArgs: Prisma.ProgramFindManyArgs) {
    try {
      return await this.prisma.program.findMany(programFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(programFindFirstArgs: Prisma.ProgramFindFirstArgs) {
    try {
      return await this.prisma.program.findFirst(programFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(programUpdateOneArgs: Prisma.ProgramUpdateArgs) {
    try {
      return await this.prisma.program.update(programUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(programUpdateManyArgs: Prisma.ProgramUpdateManyArgs) {
    try {
      return await this.prisma.program.updateMany(programUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(programDeleteArgs: Prisma.ProgramDeleteArgs) {
    try {
      await this.prisma.program.delete(programDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(programDeleteManyArgs: Prisma.ProgramDeleteManyArgs) {
    try {
      await this.prisma.program.deleteMany(programDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(programAggregateArgs: Prisma.ProgramAggregateArgs) {
    try {
      return await this.prisma.program.aggregate(programAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(programCountArgs: Prisma.ProgramCountArgs) {
    try {
      return await this.prisma.program.count(programCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

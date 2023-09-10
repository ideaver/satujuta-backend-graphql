import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class SubdistrictService {
  constructor(private prisma: PrismaService) {}

  async createOne(subdistrictCreateArgs: Prisma.SubdistrictCreateArgs) {
    try {
      return await this.prisma.subdistrict.create(subdistrictCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(
    subdistrictCreateManyArgs: Prisma.SubdistrictCreateManyArgs,
  ) {
    try {
      return await this.prisma.subdistrict.createMany(
        subdistrictCreateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(subdistrictFindUniqueArgs: Prisma.SubdistrictFindUniqueArgs) {
    try {
      return await this.prisma.subdistrict.findUnique(
        subdistrictFindUniqueArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(subdistrictFindManyArgs: Prisma.SubdistrictFindManyArgs) {
    try {
      return await this.prisma.subdistrict.findMany(subdistrictFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(subdistrictFindFirstArgs: Prisma.SubdistrictFindFirstArgs) {
    try {
      return await this.prisma.subdistrict.findFirst(subdistrictFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(subdistrictUpdateOneArgs: Prisma.SubdistrictUpdateArgs) {
    try {
      return await this.prisma.subdistrict.update(subdistrictUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(
    subdistrictUpdateManyArgs: Prisma.SubdistrictUpdateManyArgs,
  ) {
    try {
      return await this.prisma.subdistrict.updateMany(
        subdistrictUpdateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(subdistrictDeleteArgs: Prisma.SubdistrictDeleteArgs) {
    try {
      await this.prisma.subdistrict.delete(subdistrictDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(
    subdistrictDeleteManyArgs: Prisma.SubdistrictDeleteManyArgs,
  ) {
    try {
      await this.prisma.subdistrict.deleteMany(subdistrictDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(subdistrictAggregateArgs: Prisma.SubdistrictAggregateArgs) {
    try {
      return await this.prisma.subdistrict.aggregate(subdistrictAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(subdistrictCountArgs: Prisma.SubdistrictCountArgs) {
    try {
      return await this.prisma.subdistrict.count(subdistrictCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

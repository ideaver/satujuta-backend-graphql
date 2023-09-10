import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class DistrictService {
  constructor(private prisma: PrismaService) {}

  async createOne(districtCreateArgs: Prisma.DistrictCreateArgs) {
    try {
      return await this.prisma.district.create(districtCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(districtCreateManyArgs: Prisma.DistrictCreateManyArgs) {
    try {
      return await this.prisma.district.createMany(districtCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(districtFindUniqueArgs: Prisma.DistrictFindUniqueArgs) {
    try {
      return await this.prisma.district.findUnique(districtFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(districtFindManyArgs: Prisma.DistrictFindManyArgs) {
    try {
      return await this.prisma.district.findMany(districtFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(districtFindFirstArgs: Prisma.DistrictFindFirstArgs) {
    try {
      return await this.prisma.district.findFirst(districtFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(districtUpdateOneArgs: Prisma.DistrictUpdateArgs) {
    try {
      return await this.prisma.district.update(districtUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(districtUpdateManyArgs: Prisma.DistrictUpdateManyArgs) {
    try {
      return await this.prisma.district.updateMany(districtUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(districtDeleteArgs: Prisma.DistrictDeleteArgs) {
    try {
      await this.prisma.district.delete(districtDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(districtDeleteManyArgs: Prisma.DistrictDeleteManyArgs) {
    try {
      await this.prisma.district.deleteMany(districtDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(districtAggregateArgs: Prisma.DistrictAggregateArgs) {
    try {
      return await this.prisma.district.aggregate(districtAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(districtCountArgs: Prisma.DistrictCountArgs) {
    try {
      return await this.prisma.district.count(districtCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

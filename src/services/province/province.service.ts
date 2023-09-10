import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProvinceService {
  constructor(private prisma: PrismaService) {}

  async createOne(provinceCreateArgs: Prisma.ProvinceCreateArgs) {
    try {
      return await this.prisma.province.create(provinceCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(provinceCreateManyArgs: Prisma.ProvinceCreateManyArgs) {
    try {
      return await this.prisma.province.createMany(provinceCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(provinceFindUniqueArgs: Prisma.ProvinceFindUniqueArgs) {
    try {
      return await this.prisma.province.findUnique(provinceFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(provinceFindManyArgs: Prisma.ProvinceFindManyArgs) {
    try {
      return await this.prisma.province.findMany(provinceFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(provinceFindFirstArgs: Prisma.ProvinceFindFirstArgs) {
    try {
      return await this.prisma.province.findFirst(provinceFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(provinceUpdateOneArgs: Prisma.ProvinceUpdateArgs) {
    try {
      return await this.prisma.province.update(provinceUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(provinceUpdateManyArgs: Prisma.ProvinceUpdateManyArgs) {
    try {
      return await this.prisma.province.updateMany(provinceUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(provinceDeleteArgs: Prisma.ProvinceDeleteArgs) {
    try {
      await this.prisma.province.delete(provinceDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(provinceDeleteManyArgs: Prisma.ProvinceDeleteManyArgs) {
    try {
      await this.prisma.province.deleteMany(provinceDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(provinceAggregateArgs: Prisma.ProvinceAggregateArgs) {
    try {
      return await this.prisma.province.aggregate(provinceAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(provinceCountArgs: Prisma.ProvinceCountArgs) {
    try {
      return await this.prisma.province.count(provinceCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

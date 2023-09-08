import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  async createOne(cityCreateArgs: Prisma.CityCreateArgs) {
    try {
      return await this.prisma.city.create(cityCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(cityCreateManyArgs: Prisma.CityCreateManyArgs) {
    try {
      return await this.prisma.city.createMany(cityCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(cityFindUniqueArgs: Prisma.CityFindUniqueArgs) {
    try {
      return await this.prisma.city.findUnique(cityFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(cityFindManyArgs: Prisma.CityFindManyArgs) {
    try {
      return await this.prisma.city.findMany(cityFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(cityFindFirstArgs: Prisma.CityFindFirstArgs) {
    try {
      return await this.prisma.city.findFirst(cityFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(cityUpdateOneArgs: Prisma.CityUpdateArgs) {
    try {
      return await this.prisma.city.update(cityUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(cityUpdateManyArgs: Prisma.CityUpdateManyArgs) {
    try {
      return await this.prisma.city.updateMany(cityUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(cityDeleteArgs: Prisma.CityDeleteArgs) {
    try {
      await this.prisma.city.delete(cityDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(cityDeleteManyArgs: Prisma.CityDeleteManyArgs) {
    try {
      await this.prisma.city.deleteMany(cityDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(cityAggregateArgs: Prisma.CityAggregateArgs) {
    try {
      return await this.prisma.city.aggregate(cityAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(cityCountArgs: Prisma.CityCountArgs) {
    try {
      return await this.prisma.city.count(cityCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

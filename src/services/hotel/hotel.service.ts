import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class HotelService {
  constructor(private prisma: PrismaService) {}

  async createOne(hotelCreateArgs: Prisma.HotelCreateArgs) {
    try {
      return await this.prisma.hotel.create(hotelCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(hotelCreateManyArgs: Prisma.HotelCreateManyArgs) {
    try {
      return await this.prisma.hotel.createMany(hotelCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(hotelFindUniqueArgs: Prisma.HotelFindUniqueArgs) {
    try {
      return await this.prisma.hotel.findUnique(hotelFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(hotelFindManyArgs: Prisma.HotelFindManyArgs) {
    try {
      return await this.prisma.hotel.findMany(hotelFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(hotelFindFirstArgs: Prisma.HotelFindFirstArgs) {
    try {
      return await this.prisma.hotel.findFirst(hotelFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(hotelUpdateOneArgs: Prisma.HotelUpdateArgs) {
    try {
      return await this.prisma.hotel.update(hotelUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(hotelUpdateManyArgs: Prisma.HotelUpdateManyArgs) {
    try {
      return await this.prisma.hotel.updateMany(hotelUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(hotelDeleteArgs: Prisma.HotelDeleteArgs) {
    try {
      await this.prisma.hotel.delete(hotelDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(hotelDeleteManyArgs: Prisma.HotelDeleteManyArgs) {
    try {
      await this.prisma.hotel.deleteMany(hotelDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(hotelAggregateArgs: Prisma.HotelAggregateArgs) {
    try {
      return await this.prisma.hotel.aggregate(hotelAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(hotelCountArgs: Prisma.HotelCountArgs) {
    try {
      return await this.prisma.hotel.count(hotelCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

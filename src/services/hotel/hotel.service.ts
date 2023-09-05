import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class HotelService {
  constructor(private prisma: PrismaService) {}

  async createOne(hotelCreateArgs: Prisma.HotelCreateArgs) {
    try {
      const hotel = await this.prisma.hotel.create(hotelCreateArgs);
      return hotel;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(hotelFindManyArgs: Prisma.HotelFindManyArgs) {
    try {
      const hotels = await this.prisma.hotel.findMany(hotelFindManyArgs);
      const hotel = hotels;
      return hotel;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(hotelFindUniqueArgs: Prisma.HotelFindUniqueArgs) {
    try {
      const hotel = await this.prisma.hotel.findUnique(hotelFindUniqueArgs);
      return hotel;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async update(hotelUpdateOneArgs: Prisma.HotelUpdateArgs) {
    try {
      const hotel = await this.prisma.hotel.update(hotelUpdateOneArgs);
      return hotel;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async remove(id: number) {
    try {
      const hotel = await this.prisma.hotel.delete({ where: { id } });
      return hotel;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

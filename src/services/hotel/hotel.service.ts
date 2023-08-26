import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { HotelCreateArgs } from './dto/hotel-create-one.args';
import { HotelFindManyArgs } from './dto/hotel-find-many.args';
import { HotelFindUniqueArgs } from './dto/hotel-find-one.args';
import { HotelUpdateOneArgs } from './dto/hotel-update-one.args';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class HotelService {
  constructor(private prisma: PrismaService) {}

  createOne(hotelCreateArgs: HotelCreateArgs) {
    return this.prisma.hotel
      .create(hotelCreateArgs)
      .then((hotel) => {
        return hotel;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
  findMany(hotelFindManyArgs: HotelFindManyArgs) {
    return this.prisma.hotel
      .findMany(hotelFindManyArgs)
      .then((hotels) => {
        return hotels;
      })
      .then((hotel) => {
        return hotel;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  findOne(hotelFindUniqueArgs: HotelFindUniqueArgs) {
    return this.prisma.hotel
      .findUnique(hotelFindUniqueArgs)
      .then((hotel) => {
        return hotel;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  update(hotelUpdateOneArgs: HotelUpdateOneArgs) {
    return this.prisma.hotel
      .update(hotelUpdateOneArgs)
      .then((hotel) => {
        return hotel;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  remove(id: number) {
    return this.prisma.hotel
      .delete({ where: { id } })
      .then((hotel) => {
        return hotel;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}

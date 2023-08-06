import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { HotelCreateArgs } from './dto/hotel-create-one.args';
import { GraphQLError } from 'graphql';
import { HotelFindManyArgs } from './dto/hotel-find-many.args';
import { HotelFindUniqueArgs } from './dto/hotel-find-one.args';
import { HotelUpdateOneArgs } from './dto/hotel-update-one.args';

@Injectable()
export class HotelService {
  constructor(private prisma: PrismaService) {}

  createOne(hotelCreateArgs: HotelCreateArgs) {
    return this.prisma.hotel
      .create(hotelCreateArgs)
      .then((hotel) => {
        console.log('hotel created ' + JSON.stringify(hotel));
        return hotel;
      })
      .catch((err) => {
        throw new GraphQLError('waduh' + err, {
          extensions: {
            code: 23525,
          },
        });
      });
  }
  findMany(hotelFindManyArgs: HotelFindManyArgs) {
    return this.prisma.hotel.findMany(hotelFindManyArgs).then((hotels) => {
      return hotels;
    });
  }

  findOne(hotelFindUniqueArgs: HotelFindUniqueArgs) {
    return this.prisma.hotel.findUnique({
      ...hotelFindUniqueArgs,
      include: {
        ...hotelFindUniqueArgs.include,
        address: { include: { city: true, district: true, postalCode: true } },
        checkIns: { include: { user: true } },
      },
    });
  }

  update(hotelUpdateOneArgs: HotelUpdateOneArgs) {
    return this.prisma.hotel.update(hotelUpdateOneArgs);
  }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}

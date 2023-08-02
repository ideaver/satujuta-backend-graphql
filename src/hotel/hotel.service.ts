import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { HotelCreateArgs } from './dto/hotel-create-one.args';
import { GraphQLError } from 'graphql';
import { HotelFindManyArgs } from './dto/hotel-find-many.args';

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

  findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }

  // update(id: number, updateHotelInput: UpdateHotelInput) {
  //   return `This action updates a #${id} hotel`;
  // }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}

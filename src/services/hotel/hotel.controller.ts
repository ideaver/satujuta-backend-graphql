import { HotelService } from '../hotel/hotel.service';
import { Hotel } from 'src/@generated';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  async createOne(
    hotelCreateArgs: Prisma.HotelCreateArgs,
  ): Promise<Hotel | void> {
    return await this.hotelService.createOne(hotelCreateArgs);
  }

  async createMany(hotelCreateManyArgs: Prisma.HotelCreateManyArgs) {
    return await this.hotelService.createMany(hotelCreateManyArgs);
  }

  async findOne(
    hotelFindUniqueArgs: Prisma.HotelFindUniqueArgs,
  ): Promise<Hotel | void> {
    return await this.hotelService.findOne(hotelFindUniqueArgs);
  }

  async findMany(hotelFindManyArgs: Prisma.HotelFindManyArgs) {
    return await this.hotelService.findMany(hotelFindManyArgs);
  }

  async findFirst(hotelFindFirstArgs: Prisma.HotelFindFirstArgs) {
    return await this.hotelService.findFirst(hotelFindFirstArgs);
  }

  async updateOne(hotelUpdateOneArgs: Prisma.HotelUpdateArgs) {
    return await this.hotelService.updateOne(hotelUpdateOneArgs);
  }

  async updateMany(hotelUpdateManyArgs: Prisma.HotelUpdateManyArgs) {
    return await this.hotelService.updateMany(hotelUpdateManyArgs);
  }

  async delete(hotelDeleteArgs: Prisma.HotelDeleteArgs) {
    return await this.hotelService.delete(hotelDeleteArgs);
  }

  async deleteMany(hotelDeleteManyArgs: Prisma.HotelDeleteManyArgs) {
    return await this.hotelService.deleteMany(hotelDeleteManyArgs);
  }

  async aggregate(hotelAggregateArgs: Prisma.HotelAggregateArgs) {
    return await this.hotelService.aggregate(hotelAggregateArgs);
  }

  async count(hotelCountArgs: Prisma.HotelCountArgs) {
    return await this.hotelService.count(hotelCountArgs);
  }
}
